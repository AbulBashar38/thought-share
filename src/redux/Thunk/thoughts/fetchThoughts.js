import axios from "axios";
import { fetchError, fetchStart, fetchSuccess, getThought } from "./action";

export const loadThoughts = () => {
  return async (dispatch) => {
    await dispatch(fetchStart());
    await axios
      .get("http://localhost:5000/thoughts")
      .then((res) => {
        dispatch(getThought(res.data.data));
        dispatch(fetchSuccess());
      })
      .catch((err) => dispatch(fetchError()));
  };
};
