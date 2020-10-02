import { combineReducers } from "redux";
import { mockupDataCategory } from "redux/reducer/category";
import { mockupdatahot } from "redux/reducer/dataHot";
export const RootReducer = combineReducers({
  mockupDataCategory,
  mockupdatahot,
});
