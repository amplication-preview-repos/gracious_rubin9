import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  productId?: SortOrder;
  tenantId?: SortOrder;
};
