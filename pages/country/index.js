import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../src/components/Button";
import Pagination from "../../src/components/Pagination";
import TextField from "../../src/components/TextField";
import {
  GetCountryRequest,
  DelCountryRequest,
} from "../../src/redux-saga/Action/CountryAction";

const Country = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const { countries } = useSelector((state) => state.countryStated);
  const [listCountries, setListCountries] = useState(countries);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  useEffect(() => {
    dispatch(GetCountryRequest());
  }, []);

  const deleteData = async (id) => {
    dispatch(DelCountryRequest(id));
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setListCountries(
      countries.filter((country) => {
        if (keyword) {
          return country.countryName
            .toLowerCase()
            .includes(keyword.toLowerCase());
        }
        return countries;
      })
    );
    setCurrentPage(1);
  }, [keyword]);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = listCountries.slice(firstCountryIndex, lastCountryIndex);

  return (
    <div className="flex flex-col pt-6 items-center">
      <Head>
        <title>Country CRUD | Next Redux Saga</title>
      </Head>
      <span className="text-lg font-semibold text-gray-700 mb-4 border py-3 px-3 rounded-md bg-gray-100 flex items-center gap-2">
        <img
          src="https://redux-saga.js.org/img/Redux-Saga-Logo.png"
          className="w-12"
          alt="Redux Saga Logo"
        />
        Redux Saga +
        <img
          src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png"
          className="w-12"
          alt="Formik Logo"
        />
        Formik
      </span>
      <div className="flex items-center justify-between mt-10 mb-2 md:w-5/12 sm:8/12">
        <div className="flex items-center">
          <h2 className="sm:text-sm md:text-2xl font-semibold  text-gray-800">Countries</h2>
          <Link href="/country/add">
            <button className="p-3 hover:bg-gray-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-indigo-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex">
          <TextField
            name="searchCountry"
            placeholder="Search Country by name"
            onChange={handleChange}
          />
        </div>
      </div>
      <table className="md:w-5/12 mb-8">
        <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-100">
          <tr>
            <th className="py-2">Country ID</th>
            <th>Country Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-150">
          {currentCountries.length > 0 ? (
            currentCountries &&
            currentCountries.map((country) => (
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
            ))
          ) : (
            <td className="text-center text-sm" colSpan="3">
              {" "}
              No Country Found
            </td>
          )}
        </tbody>
      </table>
      {/* Pagination */}
      <Pagination totalCountries={listCountries.length} countriesPerPage={countriesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
};

export default Country;
