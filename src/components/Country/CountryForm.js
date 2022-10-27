import React, { useState } from "react";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import Input from "../Input";
import * as Yup from "yup";

const CountryForm = () => {
  const validationSchema = Yup.object().shape({
    countryId: Yup.string("Enter Country Id").required("Country Id is required"),
    countryName: Yup.string("Enter Country Name").required("Country Name is required")
  });

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
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Country</h2>
      <form onSubmit={addData} className="mb-6 flex flex-col gap-y-2 w-4/12">
        <Input
          label="Country Id"
          type="text"
          name="country-id"
          onChange={handleChange("countryId")}
          value={values.countryId}
        />
        <Input
          label="Country Name"
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
