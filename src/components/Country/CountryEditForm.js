import React, { useEffect, useState } from "react";
import CountryApi from "../../api/CountryApi";

const CountryEditForm = ({ id, setShow, onClick }) => {
  const [country, setCountry] = useState([]);
  const [values, setValues] = useState({
    countryId: undefined,
    countryName: undefined,
  });

  useEffect(() => {
    CountryApi.getCountry(id).then((res) => {
      setCountry(res.data);
    });
  }, [id]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const updateData = async (e) => {
    e.preventDefault();
    const payload = {
      countryId: id,
      countryName: values.countryName,
    };
    await CountryApi.updateCountry(payload)
      .then((res) => {
        setShow(false);
        window.alert("Data Successfully Updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h2>Update Country</h2>
      <form onSubmit={updateData}>
        <label htmlFor="countryId">Country ID:</label>
        <input
          type="text"
          name="countryId"
          defaultValue={country.countryId}
          onChange={handleChange("countryId")}
          disabled
        />
        <label htmlFor="countryName">Country Name:</label>
        <input
          type="text"
          name="countryName"
          defaultValue={country.countryName}
          onChange={handleChange("countryName")}
        />
        <button type="submit">Update</button>
        <button onClick={onClick}>Cancel</button>
      </form>
    </>
  );
};

export default CountryEditForm;
