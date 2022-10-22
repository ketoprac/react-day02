import React, { useEffect, useState } from "react";
import CountryApi from "../../api/CountryApi";
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
    <div>
      {show ? (
        <CountryEditForm
          setShow={setShow}
          id={id}
          onClick={() => setShow(false)}
        />
      ) : (
        <>
          <CountryForm />
          <h2>List Country</h2>
          <table>
            <thead>
              <tr>
                <th>Country ID</th>
                <th>Country Name</th>
              </tr>
            </thead>
            <tbody>
              {countries &&
                countries.map((country) => (
                  <tr key={country.countryId}>
                    <td>{country.countryId}</td>
                    <td>{country.countryName}</td>
                    <td>
                      <button onClick={() => showEdit(country.countryId)}>
                        Edit Country
                      </button>
                      <button onClick={() => deleteData(country.countryId)}>
                        Delete Country
                      </button>
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
