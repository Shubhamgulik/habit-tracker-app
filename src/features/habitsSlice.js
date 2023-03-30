import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  habitsList: [],
};
// {
//     title: "workout",
//     weekStatus: ["none", "none", "none", "none", "none", "none", "none"],
//     completed: 0,
//   }
const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      console.log("Payload: ", action.type);
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
    deleteHabit: (state, action) => {
      console.log("id", action.payload);
      const newList = state.habitsList.filter(
        (habit) => habit.id !== action.payload
      );
      console.log("new list ", newList);
      state.habitsList = [...newList];
    },
  },
});

export const { addHabit, deleteHabit } = habitsSlice.actions;

export const selectHabitsList = (state) => state.habits.habitsList;

export default habitsSlice.reducer;
