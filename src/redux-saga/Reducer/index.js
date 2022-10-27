import { combineReducers } from "redux";
import CountryReducer from "./CountryReducer";
import RegionReducer from "./RegionReducer";

const rootReducer = combineReducers({
  regionStated: RegionReducer,
  countryStated: CountryReducer
});

export default rootReducer;
