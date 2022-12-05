import apiService from "../utils/apiService";
import { GET_BUSINESS_PLACE_BY_ID } from "./types";

export const getBusinessPlaceById = (id) => async (dispatch) => {
  apiService
    .get(`${process.env.REACT_APP_SERVICE_URL}/api/businessPlace/${id}`)
    .then((res) => {
      dispatch({
        type: GET_BUSINESS_PLACE_BY_ID,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
