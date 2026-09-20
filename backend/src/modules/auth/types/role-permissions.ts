import { PermissionMap } from "./permissions.types";

export const RolePermissions: PermissionMap = {
  student: [
    "assignment.read",
    "submission.create",
    "progress.read",
  ],

  mentor: [
    "assignment.read",
    "submission.review",
    "progress.update",
  ],

  admin: [
    "*",
  ],
};