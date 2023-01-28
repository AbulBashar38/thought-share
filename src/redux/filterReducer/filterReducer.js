import { FILTER_TAG, LATEST_THOUGHTS, OLDEST_THOUGHTS } from "./actionType";

const initialState = {
  latestThought: true,
  oldestThought: false,
  tag: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_THOUGHTS:
      return {
        ...state,
        latestThought: true,
        oldestThought: false,
        tag: [],
      };
    case OLDEST_THOUGHTS:
      return {
        ...state,
        oldestThought: true,
        latestThought: false,
        tag: [],
      };
    case FILTER_TAG:
      return {
        ...state,
        tag: [action.payload],
      };
    default:
      return state;
  }
};
export default filterReducer;
