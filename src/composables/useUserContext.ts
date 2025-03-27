import { inject } from 'vue';
import {UserContext} from "@/types/context";


export const UserContextSymbol = Symbol('UserContext');

export function useUserContext(): UserContext {
    const context = inject<UserContext>(UserContextSymbol);
    if (!context) {
        throw new Error('useUserContext must be used inside <UserProvider>');
    }
    return context;
}
