import { combineReducers } from "redux";
import filterReducer from "./filterReducer/filterReducer";
import historyReducer from "./readingHistory/historyReducer";
import thoughtReducer from "./thoughtReducer/thoughtReducer";

const rootReducer = combineReducers({
  thoughts: thoughtReducer,
  filter: filterReducer,
  history: historyReducer,
});
export default rootReducer;
