import { OrderCreateNestedManyWithoutTenantsInput } from "./OrderCreateNestedManyWithoutTenantsInput";
import { UserCreateNestedManyWithoutTenantsInput } from "./UserCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutTenantsInput;
  users?: UserCreateNestedManyWithoutTenantsInput;
};
