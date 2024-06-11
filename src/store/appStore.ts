import { configureStore } from "@reduxjs/toolkit";
import headingSlice from "./slices/headingSlice";

export const store = configureStore({
  reducer: {
    heading: headingSlice,
  },
});
