import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: number | null;
  product?: ProductWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
