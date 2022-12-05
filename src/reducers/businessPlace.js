import {
  GET_BUSINESS_PLACE_BY_ID,
  ID_DOES_NOT_EXIST_ERROR,
} from "../actions/types";

const initialState = {
  businessPlace: {},
  error: "",
};

const businessPlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUSINESS_PLACE_BY_ID:
      return {
        ...state,
        businessPlace: action.payload,
      };

    default:
      return state;
  }
};

export default businessPlaceReducer;
