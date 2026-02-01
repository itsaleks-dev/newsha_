import type { CooperationLead } from "@/features/cooperation/domain";
import { sendCooperationApi } from "@/features/cooperation/infrastructure";

export async function selectConsultationModal(lead: CooperationLead) {
  return sendCooperationApi(lead);
}
