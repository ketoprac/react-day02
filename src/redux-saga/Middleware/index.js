import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeCountry from "../Constants/CountryConstant";
import {
  handleAddCountry,
  handleDelCountry,
  handleEditCountry,
  handleGetOneCountry,
  handleGetCountry,
} from "./CountryMiddleware";
import * as ActionTypeUsr from "../Constants/UserConstant";
import {
  handleUsrSignin,
  handleUsrSignout,
  handleUsrSignup,
} from "./UserMiddleware";
function* watchAll() {
  yield all([
    takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST, handleUsrSignin),
    takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST, handleUsrSignout),
    takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST, handleUsrSignup),
    takeEvery(ActionTypeCountry.GET_COUNTRY_REQUEST, handleGetCountry),
    takeEvery(ActionTypeCountry.GETONE_COUNTRY_REQUEST, handleGetOneCountry),
    takeEvery(ActionTypeCountry.ADD_COUNTRY_REQUEST, handleAddCountry),
    takeEvery(ActionTypeCountry.DEL_COUNTRY_REQUEST, handleDelCountry),
    takeEvery(ActionTypeCountry.EDIT_COUNTRY_REQUEST, handleEditCountry),
  ]);
}

export default watchAll;
