import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditRegionRequest, GetOneRegionRequest } from "../../redux-saga/Action/RegionAction";
import Button from "../Button";
import Input from "../Input";

const RegionEditFormReduxSaga = ({ onClick, id }) => {
  const dispatch = useDispatch();
  const {region} = useSelector(state => state.regionStated);
  const [previewFile, setPreviewFile] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [uploaded, setUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(false);
  useEffect(() => {
    dispatch(GetOneRegionRequest(id));
  }, []);
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      regionId: id,
      regionName: region.regionName,
      file: region.regionFile,
      foto: region.regionPhoto
    },
    onSubmit:async(values) => {
      let payload = new FormData();
      payload.append('regionId',values.regionId);
      payload.append('regionName',values.regionName);
      payload.append('file',values.file);
      payload.append('foto',values.foto);

      dispatch(EditRegionRequest(payload));
      window.alert('Region Successfully Updated');
      window.location.reload();

    }
  })

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("foto", file);
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const uploadFileOnChange = (name) => (event) => {
    let reader = new FileReader();
    const files = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("file", files);
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(files);
    setUploadedFile(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImage(null);
  };

  const onClearFile = (event) => {
    event.preventDefault();
    setUploadedFile(false);
    setPreviewFile(null);
  };


  return (
    <>
      <form onSubmit={formik.handleSubmit} className="mb-6 flex flex-col gap-y-2 w-4/12">
      <Input
          name="regionName"
          label="Region Name: "
          type="text"
          onChange={formik.handleChange}
          value={formik.values.regionName}
          onBlur={formik.handleBlur}
          autoComplete="regionName"
        />
        <br />
        {uploadedFile === false ? (
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <>
            <img src={previewFile} alt="previewFile" />
            <span onClick={onClearFile}>Remove</span>
          </>
        )}
        <label>Region File: </label>
        <input
          label="Region File: "
          name="file"
          type="file"
          onChange={uploadFileOnChange("files")}
          accept='image/*'
          // value={formik.values.file}
          onBlur={formik.handleBlur}
        />
        <br />
        {uploaded === false ? (
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <>
            <img src={previewImage} alt="previewImage" />
            <span onClick={onClearImage}>Remove</span>
          </>
        )}
        <label>Region Photo: </label>
        <input
          name="foto"
          type="file"
          onChange={uploadOnChange("file")}
          accept='image/*'
          // value={formik.values.foto}
          onBlur={formik.handleBlur}
        />
        <Button type="button" onClick={formik.handleSubmit}>Update</Button>
        <Button onClick={onClick}>Cancel</Button>
      </form>
    </>
  );
};

export default RegionEditFormReduxSaga;
