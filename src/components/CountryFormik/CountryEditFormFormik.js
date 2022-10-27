import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import Input from "../Input";

const CountryEditFormFormik = ({ id, setShow, onClick }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    CountryApi.getCountry(id).then((res) => {
      setCountry(res);
    });
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      countryId: id,
      countryName: country.countryName,
    },
    onSubmit: async (values) => {
      let payload = {
        countryId: values.countryId,
        countryName: values.countryName,
      };

      await CountryApi.updateCountry(payload).then(() => {
        window.alert("Data successfully updated!");
        window.location.reload();
      });
    },
  });

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Update Country "{country.countryName}"
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="mb-6 flex flex-col gap-y-2 w-4/12"
      >
        <Input
          label="Country Id"
          type="text"
          name="countryId"
          value={formik.values.countryId}
          onChange={formik.handleChange}
          disabled
        />
        <Input
          label="Country Name"
          type="text"
          name="countryName"
          value={formik.values.countryName}
          onChange={formik.handleChange}
        />
        <Button type="submit">Update</Button>
        <Button onClick={onClick}>Cancel</Button>
      </form>
    </>
  );
};

export default CountryEditFormFormik;
