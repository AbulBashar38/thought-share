import axios from "axios";
import { ADD_THOUGHT } from "./actionType";

export const postThought = (newFormData, resetForm, setIsLoading) => {
  return async (dispatch) => {
    await axios
      .post("https://thought-share-server.onrender.com/thought", {
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
