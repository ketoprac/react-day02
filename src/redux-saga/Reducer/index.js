import { combineReducers } from "redux";
import RegionReducer from "./RegionReducer";

const rootReducer = combineReducers({
  regionStated: RegionReducer,
});

export default rootReducer;
