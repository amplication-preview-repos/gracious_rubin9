import { Order } from "../order/Order";
import { User } from "../user/User";

export type Tenant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  orders?: Array<Order>;
  users?: Array<User>;
};
