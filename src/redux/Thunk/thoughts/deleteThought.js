import axios from "axios";
import { deleteOneThought } from "./action";

export const deleteThought = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`https://thought-share-server.onrender.com/thought/${id}`)
      .then((res) => {
        if (res.data.acknowledged) {
          dispatch(deleteOneThought(id));
          window.location.reload();
        }
      })
      .error((err) => console.log(err));
  };
};
