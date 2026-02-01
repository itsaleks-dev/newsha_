import { USER_ROLES } from "@/entities/user/types";

import { RoleRoute } from "./RoleRoute";

export function AdminRoute() {
  return <RoleRoute allow={[USER_ROLES.ADMIN]} />;
}
