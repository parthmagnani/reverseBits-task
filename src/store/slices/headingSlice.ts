import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headingName: "Dashboard",
};

const heading = createSlice({
  name: "heading",
  initialState,
  reducers: {
    storeHeading: (state, action) => {
      console.log("storeHeading called");
      console.log("action", action.payload);
      // in this you will store Heading
      state.headingName = action.payload;
    },
  },
});

export const { storeHeading } = heading.actions;

export default heading.reducer;
