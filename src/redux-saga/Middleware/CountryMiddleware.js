import { call, put } from "redux-saga/effects";
import CountryApi from "../../api/CountryApi";
import {
  GetCountrySuccess,
  GetCountryFailed,
  AddCountrySuccess,
  AddCountryFailed,
  DelCountrySuccess,
  DelCountryFailed,
  GetOneCountrySuccess,
  GetOneCountryFailed,
  EditCountrySuccess,
  EditCountryFailed,
} from "../Action/CountryAction";

function* handleGetCountry() {
  try {
    const result = yield call(CountryApi.getCountries);
    yield put(GetCountrySuccess(result));
  } catch (error) {
    yield put(GetCountryFailed(error));
  }
}

function* handleGetOneCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(CountryApi.getCountry, payload);
    yield put(GetOneCountrySuccess(result));
  } catch (error) {
    yield put(GetOneCountryFailed(error));
  }
}

function* handleDelCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(CountryApi.deleteCountry, payload);
    yield put(DelCountrySuccess(result));
  } catch (error) {
    yield put(DelCountryFailed(error));
  }
}

function* handleAddCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(CountryApi.addCountry, payload);
    yield put(AddCountrySuccess(result.data));
  } catch (error) {
    yield put(AddCountryFailed(error));
  }
}

function* handleEditCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(CountryApi.updateCountry, payload);
    yield put(EditCountrySuccess(result.data));
  } catch (error) {
    yield put(EditCountryFailed(error));
  }
}

export {
  handleAddCountry,
  handleDelCountry,
  handleEditCountry,
  handleGetOneCountry,
  handleGetCountry,
};
