import { createSlice, current } from "@reduxjs/toolkit";

// Initial state with empty array of habits
const initialState = {
  habitsList: [],
};

// Creating habit slice
const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    // Adding new habit to the list of habits
    addHabit: (state, action) => {
      const id = Math.random() * 1000;
      const weekStatus = [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
      ];
      const habit = {
        id,
        title: action.payload,
        weekStatus,
        completed: 0,
      };

      state.habitsList = [habit, ...state.habitsList];
    },
    // Deleting habits from the list
    deleteHabit: (state, action) => {
      const newList = state.habitsList.filter(
        (habit) => habit.id !== action.payload
      );
      console.log("new list ", newList);
      state.habitsList = [...newList];
    },
    // Updating status as Done, NotDone, None
    updateStatus: (state, action) => {
      let index = state.habitsList.findIndex(
        (item) => item.id === action.payload.habit.id
      );
      state.habitsList[index] = {
        ...action.payload.habit,
        weekStatus: action.payload.newArray,
      };
    },
  },
});

// Creating actions from the habitsslice
export const { addHabit, deleteHabit, updateStatus } = habitsSlice.actions;

// Creating selector for Habits List
export const selectHabitsList = (state) => state.habits.habitsList;

// Exporting reducer
export default habitsSlice.reducer;
