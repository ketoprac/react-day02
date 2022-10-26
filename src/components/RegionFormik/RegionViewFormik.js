import React, { useEffect, useState } from "react";
import RegionApi from "../../api/RegionApi";
import RegionEditFormik from "./RegionEditFormFormik";
import RegionFormFormik from "./RegionFormFormik";

function RegionFormik() {
  const [regions, setRegions] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const getData = async () => {
    const data = await RegionApi.getRegions();
    setRegions(data);
  };

  const deleteData = async (id) => {
    await RegionApi.deleteRegion(id);
    window.alert("Data Successfully Deleted!");
  };

  const showEdit = (id) => {
    setShow(true);
    setId(id);
  };

  useEffect(() => {
    getData();
  }, [regions]);

  return (
    <div className="flex flex-col pt-6 justify-center items-center">
      <h1 className="text-4xl font-bold mb-3">CRUD Region with Formik</h1>
      {show ? (
        <RegionEditFormik
          setShow={setShow}
          id={id}
          onClick={() => setShow(false)}
        />
      ) : (
        <>
          <RegionFormFormik/>
          <table className="border w-5/12 mb-8 table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th>Region ID</th>
                <th className="p-3">Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions &&
                regions.map((region) => (
                  <tr key={region.regionId}>
                    <td className="font-bold text-center p-2">{region.regionId}</td>
                    <td>{region.regionName}</td>
                    <td className="flex justify-center">
                      <button onClick={() => showEdit(region.regionId)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                      <button className="ml-1" onClick={() => deleteData(region.regionId)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
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
}

export default RegionFormik;
