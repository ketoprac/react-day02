import React, { useEffect, useState } from "react";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import Input from "../Input";

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
      <h2 className="text-3xl font-bold">Update Country</h2>
      <form onSubmit={updateData} className="mb-6 flex flex-col gap-y-2 w-4/12">
        <label htmlFor="countryId">Country ID:</label>
        <Input
          type="text"
          name="countryId"
          defaultValue={country.countryId}
          onChange={handleChange("countryId")}
          disabled
        />
        <label htmlFor="countryName">Country Name:</label>
        <Input
          type="text"
          name="countryName"
          defaultValue={country.countryName}
          onChange={handleChange("countryName")}
        />
        <Button type="submit">Update</Button>
        <Button onClick={onClick}>Cancel</Button>
      </form>
    </>
  );
};

export default CountryEditForm;
