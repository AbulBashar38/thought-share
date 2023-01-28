import {
  DELETE_THOUGHT,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_THOUGHT,
} from "./actionType";

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const getThought = (thought) => {
  return { type: GET_THOUGHT, payload: thought };
};
export const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};
export const fetchError = () => {
  return { type: FETCH_ERROR };
};
export const deleteOneThought = (id) => {
  return { type: DELETE_THOUGHT, payload: id };
};
