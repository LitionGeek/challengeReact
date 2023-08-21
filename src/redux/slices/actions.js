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
    setActions: (state, { payload }) => {
      console.log({ oldctions: state.actions, payload });
      state.actions = [...state.actions, payload];
    },
  },
});

export const { setAction, setActions } = actionSlice.actions;

export const getAction = (state) => state.actions.action;
export const getActions = (state) => state.actions.actions;
