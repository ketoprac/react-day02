import React, { useState } from "react";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import Input from "../Input";

const CountryForm = () => {
  const [values, setValues] = useState({
    countryId: undefined,
    countryName: undefined,
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  
  const addData = async (e) => {
    e.preventDefault();
    await CountryApi.addCountry(values);
    window.alert("Country added successfully!");
    window.location.reload();
  };

  return (
    <>
      <h2 className="text-3xl font-bold">Add Country</h2>
      <form onSubmit={addData} className="mb-6 flex flex-col gap-y-2 w-4/12">
        <label htmlFor="country-id">Country Id:</label>
        <Input
          type="text"
          name="country-id"
          onChange={handleChange("countryId")}
          value={values.countryId}
        />
        <label htmlFor="country-name">Country Name:</label>
        <Input
          type="text"
          name="country-name"
          onChange={handleChange("countryName")}
          value={values.countryName}
        />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default CountryForm;
