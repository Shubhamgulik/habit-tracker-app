import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todoSlice";
import habitsReducer from "../features/habitsSlice";
import thunk from "redux-thunk";
// import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
  middleware: [thunk],
});
