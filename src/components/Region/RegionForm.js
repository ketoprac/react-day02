import React, { useState } from "react";
import RegionApi from "../../api/RegionApi";
import Button from "../Button";
import Input from "../Input";

const RegionForm = () => {
  const [region, setRegion] = useState("");

  const addData = async (e) => {
    e.preventDefault();
    const payload = {
      regionId: Math.round(Math.random() * 100),
      regionName: region,
    };
    try {
      const res = await RegionApi.addRegion(payload);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    setRegion("");
  };

  return (
    <>
      <h2 className="text-3xl font-bold">Add Region</h2>
      <form onSubmit={addData} className="mb-6 flex flex-col gap-y-2 w-4/12">
        <label htmlFor="region-name">Region Name:</label>
        <Input
          type="text"
          name="region-name"
          onChange={(e) => setRegion(e.target.value)}
          value={region}
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default RegionForm;
