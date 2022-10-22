import React, { useEffect, useState } from "react";
import RegionApi from "../../api/RegionApi";
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
      await RegionApi.addRegion(payload);
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
    <div>
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
          <h2>List Region</h2>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <tbody>
              {regions &&
                regions.map((region) => (
                  <tr key={region.regionId}>
                    <td>{region.regionId}</td>
                    <td>{region.regionName}</td>
                    <td>
                      <button onClick={() => showEdit(region.regionId)}>Edit Region</button>
                      <button onClick={() => deleteData(region.regionId)}>
                        Delete Region
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

export default Region;
