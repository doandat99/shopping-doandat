import { combineReducers } from "redux";
import { mockupDataCategory } from "redux/reducer/category";
import { User } from "redux/reducer/user";
export const RootReducer = combineReducers({
  mockupDataCategory,
  User,
});
