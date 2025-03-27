// composables/useUserOrdersContext.ts
import { inject, type Ref } from 'vue';
import type { Order } from '@/types/order';
import type { FetchStatus, Pagination } from '@/composables/useFetchHelper';

export interface UserOrdersContext {
    orders: Ref<Order[]>;
    status: Ref<FetchStatus>;
    message: Ref<string>;
    pagination: Ref<Pagination | null>;
    page: Ref<number>;
    setPage: (page: number) => void;
}

export const UserOrdersContextSymbol = Symbol('UserOrdersContext');

export function useUserOrdersContext(): UserOrdersContext {
    const context = inject<UserOrdersContext>(UserOrdersContextSymbol);
    if (!context) {
        throw new Error('useUserOrdersContext must be used within a UserOrdersProvider');
    }
    return context;
}
