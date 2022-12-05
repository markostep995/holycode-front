import { combineReducers } from "redux";
import businessPlaceReducer from "./businessPlace";

export default combineReducers({
  businessPlace: businessPlaceReducer,
});
