import { combineReducers } from "redux";
import CountryReducer from "./CountryReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  userStated: UserReducer,
  countryStated: CountryReducer,
});

export default rootReducer;
