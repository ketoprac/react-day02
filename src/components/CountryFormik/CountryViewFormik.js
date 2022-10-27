import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CountryApi from "../../api/CountryApi";
import CountryEditFormFormik from "./CountryEditFormFormik";
import CountryFormFormik from "./CountryFormFormik";

const CountryViewFormik = () => {
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
    <div className="flex flex-col pt-6 items-center">
            <Helmet>
        <meta charSet="utf-8" />
        <title>Country | Formik</title>
      </Helmet>
      {show ? (
        <CountryEditFormFormik
          setShow={setShow}
          id={id}
          onClick={() => setShow(false)}
        />
      ) : (
        <>
            <span className="text-lg font-semibold text-gray-700 mb-4 border py-3 px-3 rounded-md bg-gray-100 flex items-center gap-2">
            <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" className="w-12" alt="Formik Logo" />
            Formik
          </span>
          <CountryFormFormik />
          <h2 className="text-2xl font-semibold mt-10 mb-6 text-gray-800">
            Countries
          </h2>
          <table className="border w-5/12 mb-8">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="py-2">Country ID</th>
                <th>Country Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {countries &&
                countries.map((country) => (
                  <tr key={country.countryId}>
                    <td className="font-bold text-center px-6">
                      {country.countryId}
                    </td>
                    <td className="py-3 uppercase font-medium">
                      {country.countryName}
                    </td>
                    <td className="flex justify-center">
                      <button
                        onClick={() => showEdit(country.countryId)}
                        className="p-3 hover:bg-gray-300 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-800"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteData(country.countryId)}
                        className="p-3 hover:bg-gray-300 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
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

export default CountryViewFormik;
