// composables/useFetchHelper.ts
import { ref } from 'vue';

export type FetchStatus = 'idle' | 'loading' | 'ready' | 'error' | 'no-data';
export type FetchMode = 'single' | 'list';

export interface Pagination {
    page: number;
    size: number;
    totalPages: number;
    totalItems: number;
}

export function useFetchHelper<T>() {
    const data = ref<T | T[] | null>(null);
    const status = ref<FetchStatus>('idle');
    const message = ref<string>('');
    const pagination = ref<Pagination | null>(null);

    const fetchData = async (
        fetchFn: () => Promise<any>,
        mode: FetchMode = 'single'
    ) => {
        status.value = 'loading';
        message.value = '';
        data.value = null;
        pagination.value = null;

        try {
            const response = await fetchFn();
            const root = response?.data ?? response;

            if (root?.error) {
                status.value = 'error';
                message.value = root.error || 'Unknown error';
                return;
            }

            if (mode === 'single') {
                const item = root?.item;
                if (!item || Object.keys(item).length === 0) {
                    status.value = 'no-data';
                    return;
                }
                data.value = item;
            } else if (mode === 'list') {
                const list = root?.itemList;
                const pageInfo = root?.pagination;

                if (!Array.isArray(list) || list.length === 0) {
                    status.value = 'no-data';
                    data.value = [];
                    pagination.value = pageInfo ?? null;
                    return;
                }

                data.value = list;
                pagination.value = pageInfo ?? null;
            }

            status.value = 'ready';
        } catch (err: any) {
            status.value = 'error';
            message.value = err?.message || 'Unknown error';
        }
    };

    return {
        data,
        status,
        message,
        pagination,
        fetchData,
    };
}
