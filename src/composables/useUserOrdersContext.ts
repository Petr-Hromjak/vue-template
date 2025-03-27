import { inject } from 'vue';
import {UserOrdersContext} from "@/types/context";

export const UserOrdersContextSymbol = Symbol('UserOrdersContext');

export function useUserOrdersContext(): UserOrdersContext {
    const context = inject<UserOrdersContext>(UserOrdersContextSymbol);
    if (!context) {
        throw new Error('useUserOrdersContext must be used within a UserOrdersProvider');
    }
    return context;
}
