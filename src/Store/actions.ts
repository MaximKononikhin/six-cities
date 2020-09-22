import { HotelType, IComment, ThunkActionType } from "../utils/types";
import { ActionType, FILTER_HOTELS, LOAD_COMMENTS, LOAD_HOTELS, SORT_HOTELS } from "./actionTypes";

export const loadHotels = (): ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.get(`/hotels`);
    const hotels: HotelType[] = response.data;
    dispatch(loadHotelsAction(hotels));
  }
};

export const loadReviews = (id: number): ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.get(`comments/${id}`);
    const comments: IComment[] = response.data;
    dispatch(loadCommentsAction(comments));
  }
};

const loadHotelsAction = (hotels: HotelType[]): ActionType => {
  return {
    type: LOAD_HOTELS,
    payload: hotels
  }
};

const loadCommentsAction = (comments: IComment[]): ActionType => {
  return {
    type: LOAD_COMMENTS,
    payload: comments
  }
};

export const filterHotelsAction = (filterItem: string): ActionType => {
  return {
    type: FILTER_HOTELS,
    payload: filterItem
  }
};

export const sortHotelsAction = (sortingItem: string): ActionType => {
  return {
    type: SORT_HOTELS,
    payload: sortingItem
  }
};