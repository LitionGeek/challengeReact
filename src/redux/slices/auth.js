import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    nombre: "Alan",
  },
  reducers: {
    setCredentials: (state, action) => {
      state.nombre = action.payload.nombre;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export const getUsuarioNombre = (state) => state.auth.nombre;
