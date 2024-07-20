import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  product?: Product | null;
  tenant?: Tenant | null;
};
