import { HotelType, IComment } from "../utils/types";

export const LOAD_HOTELS = 'load-hotels';
export const LOAD_COMMENTS = 'load-comments';
export const FILTER_HOTELS = 'filter-hotels';
export const SORT_HOTELS = 'sort-hotles';

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

export type ActionType = LoadHotelsActionType | LoadCommentsActionType | FilterHotelsActionType | SortHotelsActionType;