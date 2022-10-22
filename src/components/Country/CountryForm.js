import React, { useState } from "react";
import CountryApi from "../../api/CountryApi";

const CountryForm = ({ onSubmit, onChange, value }) => {
  const [values, setValues] = useState({
    countryId: undefined,
    countryName: undefined,
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const addData = async (e) => {
    e.preventDefault();
    await CountryApi.addCountry(values).then((res) => console.log(res));
  };

  return (
    <>
      <h2>Add Region</h2>
      <form onSubmit={addData}>
        <label htmlFor="country-id">Country Id:</label>
        <input
          type="text"
          name="country-id"
          onChange={handleChange("countryId")}
          value={values.countryId}
        />
        <label htmlFor="country-name">Country Name:</label>
        <input
          type="text"
          name="country-name"
          onChange={handleChange("countryName")}
          value={values.countryName}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default CountryForm;
