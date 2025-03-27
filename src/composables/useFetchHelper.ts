import { ref } from 'vue';
import {FetchMode, FetchStatus, Pagination} from "@/types/fetch";
import {FETCH_MODE, FETCH_STATUS} from "@/constants/fetch-constants";


export function useFetchHelper<T>() {
    const data = ref<T | T[] | null>(null);
    const status = ref<FetchStatus>(FETCH_STATUS.IDLE);
    const message = ref<string>('');
    const pagination = ref<Pagination | null>(null);

    const fetchData = async (
        fetchFn: () => Promise<any>,
        mode: FetchMode = FETCH_MODE.SINGLE
    ) => {
        status.value = FETCH_STATUS.LOADING;
        message.value = '';
        data.value = null;
        pagination.value = null;

        try {
            const response = await fetchFn();
            const root = response?.data ?? response;

            if (root?.error) {
                status.value = FETCH_STATUS.ERROR;
                message.value = root.error || 'Unknown error';
                return;
            }

            if (mode === FETCH_MODE.SINGLE) {
                const item = root?.item;
                if (!item || Object.keys(item).length === 0) {
                    status.value = FETCH_STATUS.NO_DATA;
                    return;
                }
                data.value = item;
            } else if (mode === FETCH_MODE.LIST) {
                const list = root?.itemList;
                const pageInfo = root?.pagination;

                if (!Array.isArray(list) || list.length === 0) {
                    status.value = FETCH_STATUS.NO_DATA;
                    data.value = [];
                    pagination.value = pageInfo ?? null;
                    return;
                }

                data.value = list;
                pagination.value = pageInfo ?? null;
            }

            status.value = FETCH_STATUS.READY;
        } catch (err: any) {
            status.value = FETCH_STATUS.ERROR;
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
