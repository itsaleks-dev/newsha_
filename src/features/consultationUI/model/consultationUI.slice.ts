import { createSlice } from "@reduxjs/toolkit";

export type ConsultationModalState = "closed" | "form" | "success";

interface ConsultationUIState {
  modal: ConsultationModalState;
}

const initialState: ConsultationUIState = {
  modal: "closed",
};

const consultationUISlice = createSlice({
  name: "consultationUI",
  initialState,
  reducers: {
    openConsultation(state) {
      state.modal = "form";
    },
    closeConsultation(state) {
      state.modal = "closed";
    },
    showConsultationSuccess(state) {
      state.modal = "success";
    },
  },
});

export const { openConsultation, closeConsultation, showConsultationSuccess } =
  consultationUISlice.actions;

export const consultationUIReducer = consultationUISlice.reducer;
