import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actions: [],
  action: [],
};

export const actionSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.action = action.payload;
    },
  },
});

export const { setAction } = actionSlice.actions;

export const getAction = (state) => state.actions.action;
export const getActions = (state) => state.actions.actions;
