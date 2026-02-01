export {
  consultationUIReducer,
  openConsultation,
  closeConsultation,
  showConsultationSuccess,
} from "./consultationUI.slice";

export type { ConsultationModalState } from "./consultationUI.slice";
export { selectConsultationModal } from "./consultationUI.selectors";
