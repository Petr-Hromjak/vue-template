export const FETCH_STATUS = {
    IDLE: 'idle',
    LOADING: 'loading',
    READY: 'ready',
    NO_DATA: 'no-data',
    ERROR: 'error',
} as const;

export const FETCH_MODE = {
    SINGLE: 'single',
    LIST: 'list',
} as const;