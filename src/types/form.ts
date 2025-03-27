import {OrderStatus} from "./order";

export interface OrderFormData {
    status: OrderStatus;
    total: number;
    createdAt: string;
}