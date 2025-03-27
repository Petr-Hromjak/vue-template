// composables/useUserContext.ts
import { inject, type Ref } from 'vue';
import type { FetchStatus } from '@/composables/useFetchHelper';
import type { User } from '@/types/user'; // your user type

export const UserContextSymbol = Symbol('UserContext');

export interface UserContext {
    user: Ref<User | null>;
    status: Ref<FetchStatus>;
    message: Ref<string>;
}

export function useUserContext(): UserContext {
    const context = inject<UserContext>(UserContextSymbol);
    if (!context) {
        throw new Error('useUserContext must be used inside <UserProvider>');
    }
    return context;
}
