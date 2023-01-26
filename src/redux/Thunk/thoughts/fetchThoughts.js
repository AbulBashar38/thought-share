import axios from "axios";
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_THOUGHT,
} from "./actionType";

export const loadThoughts = () => {
  return async (dispatch) => {
    await dispatch({ type: FETCH_START });
    await axios
      .get("http://localhost:5000/thoughts")
      .then((res) => {
        dispatch({ type: GET_THOUGHT, payload: res.data.data });
        dispatch({ type: FETCH_SUCCESS });
      })
      .catch((err) => dispatch({ type: FETCH_ERROR }));
  };
};
