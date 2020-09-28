import { HotelType, IComment } from "../utils/types";

export const LOAD_HOTELS = 'load-hotels';
export const LOAD_COMMENTS = 'load-comments';
export const FILTER_HOTELS = 'filter-hotels';
export const SORT_HOTELS = 'sort-hotles';
export const SET_AUTH = 'set-auth';
export const SET_LOGIN_LOADING = 'set-login-loading';
export const SET_HOTELS_LOADING = 'set-hotels-loading';

interface LoadHotelsActionType {
  type: typeof LOAD_HOTELS,
  payload: HotelType[]
};

interface LoadCommentsActionType {
  type: typeof LOAD_COMMENTS,
  payload: IComment[]
};

interface FilterHotelsActionType {
  type: typeof FILTER_HOTELS,
  payload: string
};

interface SortHotelsActionType {
  type: typeof SORT_HOTELS,
  payload: string
};

interface SetAuthActionType {
  type: typeof SET_AUTH,
  payload: boolean
};

interface SetLoginLoadingType {
  type: typeof SET_LOGIN_LOADING,
  payload: boolean
};

interface SetHotelsLoadingType {
  type: typeof SET_HOTELS_LOADING,
  payload: boolean
};

export type ActionType = LoadHotelsActionType | LoadCommentsActionType | FilterHotelsActionType
 | SortHotelsActionType | SetAuthActionType | SetLoginLoadingType | SetHotelsLoadingType;