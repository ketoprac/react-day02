import axios from "axios";
import config from "../config/config";

const getCountries = async () => {
  try {
    const result = await axios.get(`${config.domain}/api/country/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleteCountry = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/api/country/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const addCountry = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/api/country`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updateCountry = async (data) => {
  try {
    const result = await axios.put(
      `${config.domain}/api/country/${data.countryId}`,
      data
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

const getCountry = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/api/country/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const CountryApi = {
  getCountries,
  deleteCountry,
  addCountry,
  updateCountry,
  getCountry,
};

export default CountryApi;
