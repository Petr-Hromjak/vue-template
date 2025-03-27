export const FETCH_STATUS = {
    LOADING: 'loading',
    LOADING_NO_DATA: 'loading-no-data',
    READY: 'ready',
    READY_NO_DATA: 'ready-no-data',
    ERROR: 'error',
    ERROR_NO_DATA: 'error-no-data',
} as const;

export const FETCH_MODE = {
    SINGLE: 'single',
    LIST: 'list',
} as const;