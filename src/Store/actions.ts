import { HotelType, IComment, IUserComment, LoginType, ThunkActionType, UserType } from "../utils/types";
import { ActionType, FILTER_HOTELS, LOAD_COMMENTS, LOAD_HOTELS, SET_AUTH, SORT_HOTELS, SET_LOGIN_LOADING, SET_HOTELS_LOADING, SET_USER_INFO, SEND_USER_REVIEW } from "./actionTypes";

export const loadHotels = (): ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.get(`/hotels`);
    const hotels: HotelType[] = response.data;
    dispatch(loadHotelsAction(hotels));
    dispatch(setHotelsLoading(true));
  }
};

export const loadReviews = (id: number): ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.get(`comments/${id}`);
    const comments: IComment[] = response.data;
    dispatch(loadCommentsAction(comments));
  }
};

export const checkAuth = (): ThunkActionType => {
  return async (dispatch, getState, api) => {
    api.get('/login').finally(() => {
      dispatch(setLoginLoading(true));
    })
  }
}

export const sendLogin = (loginInfo: LoginType):ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.post(`/login`, {
      email: loginInfo.email,
      password: loginInfo.password
    });
    dispatch(setUserInfoAction(response.data));
  }
}

export const sendReview = (userComment: IUserComment, hotelId: number): ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.post(`/comments/${hotelId}`, userComment);
    console.log(response)
  }
}

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

export const setAuthNeed = (flag: boolean): ActionType => {
  return {
    type: SET_AUTH,
    payload: flag
  }
};

const setLoginLoading = (flag: boolean): ActionType => {
  return {
    type: SET_LOGIN_LOADING,
    payload: flag
  }
};

const setHotelsLoading = (flag: boolean): ActionType => {
  return {
    type: SET_HOTELS_LOADING,
    payload: flag
  }
};

const setUserInfoAction = (userInfo: UserType): ActionType => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  }
};

const sendUserComment = (userComment: IUserComment): ActionType => {
  return {
    type: SEND_USER_REVIEW,
    payload: userComment
  }
};