import {ORDER_STATUSES} from "../constants/order-constants";

export type OrderStatus = (typeof ORDER_STATUSES)[keyof typeof ORDER_STATUSES];

export interface Order {
    id: number;
    status: OrderStatus;
    total: number;
    createdAt: string;
}