import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (_, {payload}) => payload,
  }
})

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;


// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

// const filterReducer = createReducer('', builder => {
//   builder.addCase(setFilter, (_, { payload }) => payload);
// });

// export default filterReducer;

//import { SET_FILTER } from './filter-types';

//const initialState = '';

// const filterReducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
