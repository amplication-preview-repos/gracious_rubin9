import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: number | null;
  name: string | null;
  orders?: Array<Order>;
};
