import type { RootState } from "@/app/store/rootReducer";

export const selectConsultationModal = (state: RootState) => state.consultationUI.modal;
