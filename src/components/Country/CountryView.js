import React, { useEffect, useState } from "react";
import CountryApi from "../../api/CountryApi";
import Button from "../Button";
import CountryEditForm from "./CountryEditForm";
import CountryForm from "./CountryForm";

const CountryView = () => {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const getData = async () => {
    const data = await CountryApi.getCountries();
    setCountries(data);
  };

  const deleteData = async (id) => {
    await CountryApi.deleteCountry(id);
    window.alert("Data Successfully Deleted!");
  };

  const showEdit = (id) => {
    setShow(true);
    setId(id);
  };

  useEffect(() => {
    getData();
  }, [countries]);

  return (
    <div className="flex flex-col pt-6 justify-center items-center">
      {show ? (
        <CountryEditForm
          setShow={setShow}
          id={id}
          onClick={() => setShow(false)}
        />
      ) : (
        <>
          <CountryForm />
          <h2 className="text-3xl font-bold mb-4">List Country</h2>
          <table className="border w-7/12">
            <thead>
              <tr>
                <th>Country ID</th>
                <th>Country Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {countries &&
                countries.map((country) => (
                  <tr key={country.countryId}>
                    <td className="font-bold text-center">{country.countryId}</td>
                    <td>{country.countryName}</td>
                    <td className="flex justify-center">
                      <Button onClick={() => showEdit(country.countryId)}>
                        Edit
                      </Button>
                      <Button onClick={() => deleteData(country.countryId)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryView;
