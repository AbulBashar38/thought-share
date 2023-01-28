import { ADD_HISTORY } from "./actionType";

export const addHistory = (thought) => {
  return { type: ADD_HISTORY, payload: thought };
};
