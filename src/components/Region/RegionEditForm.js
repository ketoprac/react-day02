import React, { useState, useEffect } from "react";
import RegionApi from "../../api/RegionApi";

const RegionEditForm = ({ onClick, id, setShow }) => {
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
      <h2>Update Region</h2>
      <form onSubmit={(e) => updateData(e)}>
        <label htmlFor="regionId">Region ID:</label>
        <input
          type="text"
          name="regionId"
          defaultValue={region.regionId}
          onChange={handleChange("regionId")}
          disabled
        />
        <label htmlFor="regionName">Region Name:</label>
        <input
          type="text"
          name="regionName"
          defaultValue={region.regionName}
          onChange={handleChange("regionName")}
        />
        <button type="submit">Update</button>
        <button onClick={onClick}>Cancel</button>
      </form>
    </>
  );
};

export default RegionEditForm;
