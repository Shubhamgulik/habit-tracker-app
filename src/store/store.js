import { configureStore } from "@reduxjs/toolkit";

// Importing Habits Reducer
import habitsReducer from "../features/habitsSlice";
// Importing logger to log actions
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
  middleware: [logger],
});
