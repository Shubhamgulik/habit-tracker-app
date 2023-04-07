import { createSlice, current } from "@reduxjs/toolkit";
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
      // console.log("A: ", action.type);
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
      const newList = state.habitsList.filter(
        (habit) => habit.id !== action.payload
      );
      console.log("new list ", newList);
      state.habitsList = [...newList];
    },
    updateStatus: (state, action) => {
      let index = state.habitsList.findIndex(
        (item) => item.id === action.payload.habit.id
      );

      // let newArray = [...state.habitsList];
      // newArray[index] = action.payload;
      // state.habitsList = [...state.habitsList, action.payload];
      state.habitsList[index] = {
        ...action.payload.habit,
        weekStatus: action.payload.newArray,
      };
    },
  },
});

export const { addHabit, deleteHabit, updateStatus } = habitsSlice.actions;

export const selectHabitsList = (state) => state.habits.habitsList;

export default habitsSlice.reducer;
