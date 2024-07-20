import { OrderUpdateManyWithoutTenantsInput } from "./OrderUpdateManyWithoutTenantsInput";
import { UserUpdateManyWithoutTenantsInput } from "./UserUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutTenantsInput;
  users?: UserUpdateManyWithoutTenantsInput;
};
