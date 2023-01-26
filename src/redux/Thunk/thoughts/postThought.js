import axios from "axios";
import { ADD_THOUGHT } from "./actionType";

export const postThought = (newFormData, resetForm, setIsLoading) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:5000/thought", {
        thought: newFormData,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          dispatch({ type: ADD_THOUGHT, payload: newFormData });
          resetForm({});
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
};
