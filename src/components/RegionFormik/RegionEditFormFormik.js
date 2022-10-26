import React, { useState, useEffect } from "react";
import RegionApi from "../../api/RegionApi";
import Button from "../Button";
import Input from "../Input";

const RegionEditFormik = ({ onClick, id, setShow }) => {
  const [region, setRegion] = useState([]);
  const [values, setValues] = useState({
    regionId: undefined,
    regionName: undefined,
  });

  useEffect(() => {
    RegionApi.getRegion(id).then((res) => {
      setRegion(res.data);
    });
  }, [id]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const updateData = async (e) => {
    e.preventDefault();
    const payload = {
      regionId: id,
      regionName: values.regionName,
    };
    await RegionApi.updateRegion(payload).then((res) => {
      setShow(false);
      window.alert("Data Successfully Updated!");
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <form onSubmit={(e) => updateData(e)} className="mb-6 flex flex-col gap-y-2 w-4/12">
        <label htmlFor="regionId">Region ID:</label>
        <Input
          type="text"
          name="regionId"
          defaultValue={region.regionId}
          onChange={handleChange("regionId")}
          disabled
        />
        <label htmlFor="regionName">Region Name:</label>
        <Input
          type="text"
          name="regionName"
          defaultValue={region.regionName}
          onChange={handleChange("regionName")}
        />
        <Button type="submit">Update</Button>
        <Button onClick={onClick}>Cancel</Button>
      </form>
    </>
  );
};

export default RegionEditFormik;
