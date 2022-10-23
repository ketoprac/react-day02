import axios from "axios";
import config from "../config/config";

const getRegions = async () => {
  try {
    const result = await axios.get(`${config.domain}/api/region/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteRegion = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/api/region/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const addRegion = async (payload) => {
  try {
    const formData = new FormData();
    formData.append("regionName", payload.regionName);
    formData.append("regionId", payload.regionId);
    console.log(formData);
    const result = await axios.post(`${config.domain}/api/region`, formData);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateRegion = async (data) => {
  try {
    const formData = new FormData();
    formData.append("regionId", data.regionId);
    formData.append("regionName", data.regionName);
    const result = await axios.put(
      `${config.domain}/api/region/${data.regionId}`,
      formData
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

const getRegion = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/api/region/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const RegionApi = {
  getRegions,
  deleteRegion,
  addRegion,
  updateRegion,
  getRegion,
};

export default RegionApi;
