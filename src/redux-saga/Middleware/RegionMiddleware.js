import { call, put } from "redux-saga/effects";
import RegionApi from "../../api/RegionApi";
import {
  GetRegionSuccess,
  GetRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  DelRegionSuccess,
  DelRegionFailed,
  GetOneRegionSuccess,
  GetOneRegionFailed,
  EditRegionSuccess,
  EditRegionFailed,
} from "../Action/RegionAction";

function* handleGetRegion() {
  try {
    const result = yield call(RegionApi.getRegions);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}

function* handleGetOneRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.getRegion, payload);
    yield put(GetOneRegionSuccess(result));
  } catch (error) {
    yield put(GetOneRegionFailed(error));
  }
}

function* handleDelRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.deleteRegion, payload);
    yield put(DelRegionSuccess(result));
  } catch (error) {
    yield put(DelRegionFailed(error));
  }
}

function* handleAddRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.addRegion, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* handleEditRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.updateRegion, payload);
    yield put(EditRegionSuccess(result.data));
  } catch (error) {
    yield put(EditRegionFailed(error));
  }
}

export {
  handleAddRegion,
  handleDelRegion,
  handleEditRegion,
  handleGetOneRegion,
  handleGetRegion,
};
