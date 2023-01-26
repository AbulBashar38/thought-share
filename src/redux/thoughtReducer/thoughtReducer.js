import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  ADD_THOUGHT,
  GET_THOUGHT,
  UPDATE_THOUGHT,
} from "../Thunk/thoughts/actionType";

const initialState = {
  isLoading: false,
  loadingSuccess: false,
  isError: false,
  thoughts: [],
};

const thoughtReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadingSuccess: true,
      };
    case GET_THOUGHT:
      return {
        ...state,
        thoughts: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        loadingSuccess: false,
      };
    case ADD_THOUGHT:
      return {
        ...state,
        thoughts: [...state.thoughts, action.payload],
      };
    case UPDATE_THOUGHT:
      const filteredThought = state.thoughts.filter(
        (thought) => thought._id !== action.payload._id
      );
      const newThoughts = [...filteredThought, action.payload];
      return {
        ...state,
        thoughts: newThoughts,
      };
    default:
      return state;
  }
};
export default thoughtReducer;
