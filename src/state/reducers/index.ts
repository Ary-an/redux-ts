import { combineReducers } from "redux";
import searchRepositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: searchRepositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
