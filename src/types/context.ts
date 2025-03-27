import { type Ref } from 'vue'
import {User} from "./user";
import {FetchStatus, Pagination} from "./fetch";
import {Order} from "./order";

export interface UserContext {
    user: Ref<User | null>;
    status: Ref<FetchStatus>;
    message: Ref<string | null>;
}

export interface UserOrdersContext {
    orders: Ref<Order[]>;
    status: Ref<FetchStatus>;
    message: Ref<string>;
    pagination: Ref<Pagination | null>;
    page: Ref<number>;
    setPage: (page: number) => void;
}