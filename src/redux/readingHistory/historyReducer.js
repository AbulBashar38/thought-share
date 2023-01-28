import { ADD_HISTORY } from "./actionType";

const initialState = {
  history: [],
};
const historyReducer = (state = initialState, action) => {
  const historyExist = state.history.find(
    (singleHistory) => singleHistory._id === action.payload._id
  );
  switch (action.type) {
    case ADD_HISTORY:
      if (historyExist) {
        const filterHistory = state.history.filter(
          (singleHistory) => singleHistory._id !== action.payload._id
        );
        return { ...state, history: [historyExist, ...filterHistory] };
      } else {
        return { ...state, history: [...state.history, action.payload] };
      }
    default:
      return state;
  }
};
export default historyReducer;
