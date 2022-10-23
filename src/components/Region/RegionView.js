import React, { useEffect, useState } from "react";
import RegionApi from "../../api/RegionApi";
import Button from "../Button";
import RegionEditForm from "./RegionEditForm";
import RegionForm from "./RegionForm";

function Region() {
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");
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

  const addData = async (e) => {
    e.preventDefault();
    const payload = {
      regionId: Math.round(Math.random() * 100),
      regionName: region,
    };
    try {
      const res = await RegionApi.addRegion(payload);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    setRegion("");
  };

  const showEdit = (id) => {
    setShow(true);
    setId(id);
  }

  useEffect(() => {
    getData();
  }, [regions]);

  return (
    <div className="flex flex-col pt-6 justify-center items-center">
      {show ? (
        <RegionEditForm
          setShow={setShow}
          id={id}
          onClick={() => setShow(false)}
        />
      ) : (
        <>
          <RegionForm
            onSubmit={addData}
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <h2 className="text-3xl font-bold mb-4">List Region</h2>
          <table className="border w-5/12 mb-8">
            <thead>
              <tr>
            <th>Region ID</th>
            <th>Region Name</th>
              </tr>
            </thead>
            <tbody>
              {regions &&
                regions.map((region) => (
                  <tr key={region.regionId}>
                    <td className="font-bold text-center">{region.regionId}</td>
                    <td>{region.regionName}</td>
                    <td className="flex justify-center">
                      <Button onClick={() => showEdit(region.regionId)}>Edit</Button>
                      <Button onClick={() => deleteData(region.regionId)}>
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
}

export default Region;
