import axios from "axios";
import { UPDATE_THOUGHT } from "./actionType";

export const updateThought = (id, updateThought, setIsLoading) => {
  return async (dispatch) => {
    await axios
      .put(
        `https://thought-share-server.onrender.com/updateThought/${id}`,
        updateThought
      )
      .then((res) => {
        if (res.data.acknowledged) {
          const updatedThought = { ...updateThought, _id: id };
          dispatch({ type: UPDATE_THOUGHT, payload: updatedThought });
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
};
