import { createSlice } from "@reduxjs/toolkit";

export type AuthModalMode = "login" | "register" | null;

interface AuthUIState {
  modal: AuthModalMode;
}

const initialState: AuthUIState = { modal: null };

const slice = createSlice({
  name: "authUI",
  initialState,
  reducers: {
    openLogin: (s) => {
      s.modal = "login";
    },
    openRegister: (s) => {
      s.modal = "register";
    },
    closeAuthModal: (s) => {
      s.modal = null;
    },
  },
});

export const { openLogin, openRegister, closeAuthModal } = slice.actions;
export const authUIReducer = slice.reducer;
