import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
  name: "list",
  initialState: { list: [], budget: 0, spent: 0, remaining: 0 },
  reducers: {
    addExp(state, action) {
      state.list.push({
        item: action.payload.item,
        cost: action.payload.cost,
        date: action.payload.date,
      });
      let spent = 0;
      state.list.forEach((exp) => {
        spent += exp.cost;
      });
      state.spent = spent;
      state.remaining = state.budget - spent;
    },
    deleteExp(state, action) {
      state.list.splice(action.payload, 1);
      // console.log("hi" + action.payload);
    },
    editExp: (state, action) => {
      const { id, updates } = action.payload;
      console.log(action.payload);
      const index = state.list.findIndex((exp) => exp.id === id);
      state.list[index] = { ...state.list[index], ...updates };

      // let spent = 0;
      // state.list.forEach((exp) => {
      //   spent += exp.cost;
      // });
      // state.spent = spent;
      // state.remaining = state.budget - spent;
    },

    addBudget(state, action) {
      state.budget = action.payload.inbug;

      // state.remaining = state.budget - state.spent;
    },
  },
});

// console.log(ListSlice.actions);

export default ListSlice.reducer;
export const { addExp, addBudget, deleteExp, editExp } = ListSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const ListSlice = createSlice({
//   name: "list",
//   initialState: [],
//   reducers: {
//     addExp(state, action) {
//       state.push(action.payload);
//     },
//     deleteExp(state, action) {},
//     editExp(state, action) {},
//   },
// });

// console.log(ListSlice);

// export default ListSlice.reducer;
// export const { addExp } = ListSlice.actions;
