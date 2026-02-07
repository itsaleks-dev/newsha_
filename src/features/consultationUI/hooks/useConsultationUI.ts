import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import {
  selectConsultationModal,
  openConsultation,
  closeConsultation,
  showConsultationSuccess,
} from "@/features/consultationUI/model";

export function useConsultationUI() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(selectConsultationModal);

  return {
    modal,
    open: () => dispatch(openConsultation()),
    close: () => dispatch(closeConsultation()),
    success: () => dispatch(showConsultationSuccess()),
    isOpen: modal !== "closed",
    isForm: modal === "form",
    isSuccess: modal === "success",
  };
}
