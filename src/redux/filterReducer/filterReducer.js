import { LATEST_THOUGHTS, OLDEST_THOUGHTS } from "./actionType";

const initialState = {
  latestThought: true,
  oldestThought: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_THOUGHTS:
      return {
        ...state,
        latestThought: true,
        oldestThought: false,
      };
    case OLDEST_THOUGHTS:
      return {
        ...state,
        oldestThought: true,
        latestThought: false,
      };
    default:
      return state;
  }
};
export default filterReducer;
