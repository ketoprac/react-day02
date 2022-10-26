import React, { useState, useEffect } from "react";
import RegionApi from "../../api/RegionApi";
import Button from "../Button";
import Input from "../Input";

const RegionEditForm = ({ onClick, id, setShow }) => {
  const [region, setRegion] = useState([]);
  const [values, setValues] = useState({
    regionId: 0,
    regionName: '',
  });

  useEffect(() => {
    RegionApi.getRegion(id).then((res) => {
      setRegion(res);
    });
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const updateData = async (e) => {
    e.preventDefault();
    let payload = new FormData();
    payload.append("regionId", id);
    payload.append("regionName", values.regionName);
    await RegionApi.updateRegion(payload).then((res) => {
      setShow(false);
      window.alert("Region successfully updated!");
      // window.location.reload();
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <h2 className="text-3xl font-bold">Update Region</h2>
      <br />
      <form onSubmit={updateData} className="mb-6 flex flex-col gap-y-2 w-4/12">
        <Input
          label="Region ID: "
          type="text"
          name="regionId"
          defaultValue={region.regionId}
          onChange={handleChange("regionId")}
          disabled
          />
        <Input
          label="Region Name: "
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

export default RegionEditForm;
