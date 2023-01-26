import { combineReducers } from "redux";
import filterReducer from "./filterReducer/filterReducer";
import thoughtReducer from "./thoughtReducer/thoughtReducer";

const rootReducer = combineReducers({
  thoughts: thoughtReducer,
  filter: filterReducer,
});
export default rootReducer;
