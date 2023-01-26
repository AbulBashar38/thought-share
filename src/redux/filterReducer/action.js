import { LATEST_THOUGHTS, OLDEST_THOUGHTS } from "./actionType";

export const filterLatest = () => {
  return {
    type: LATEST_THOUGHTS,
  };
};
export const filterOldest = () => {
  return {
    type: OLDEST_THOUGHTS,
  };
};
