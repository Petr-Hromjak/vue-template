import { FETCH_STATUS, FETCH_MODE } from '../constants/fetch-constants';

export type FetchStatus = (typeof FETCH_STATUS)[keyof typeof FETCH_STATUS];

export type FetchMode = (typeof FETCH_MODE)[keyof typeof FETCH_MODE];

export interface Pagination {
    page: number;
    size: number;
    totalPages: number;
    totalItems: number;
}

export interface FetchResult<T> {
    data: T | T[] | null;
    status: FetchStatus;
    message: string | null;
    pagination?: Pagination;
}