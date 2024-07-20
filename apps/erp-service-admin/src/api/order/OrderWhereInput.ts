import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  product?: ProductWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
