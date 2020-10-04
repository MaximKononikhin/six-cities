import { HotelType, IComment, UserType } from "../utils/types";

export const LOAD_HOTELS = 'load-hotels';
export const LOAD_COMMENTS = 'load-comments';
export const FILTER_HOTELS = 'filter-hotels';
export const SORT_HOTELS = 'sort-hotles';
export const SET_AUTH = 'set-auth';
export const SET_LOGIN_LOADING = 'set-login-loading';
export const SET_HOTELS_LOADING = 'set-hotels-loading';
export const SET_USER_INFO = 'set-user-info';
export const LOAD_FAVORITES = 'load-favorites';
export const UPDATE_HOTELS = 'update-hotels';

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

interface SetUserInfoType {
  type: typeof SET_USER_INFO,
  payload: UserType
};

interface LoadFavoritesType {
  type: typeof LOAD_FAVORITES,
  payload: HotelType[]
};

interface UpdateHotelsType {
  type: typeof UPDATE_HOTELS,
  payload: HotelType
};

export type ActionType = LoadHotelsActionType | LoadCommentsActionType | FilterHotelsActionType
 | SortHotelsActionType | SetAuthActionType | SetLoginLoadingType | SetHotelsLoadingType
  | SetUserInfoType | LoadFavoritesType | UpdateHotelsType;