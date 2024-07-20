import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  price?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
