import { AxiosInstance } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionType } from "../Store/actionTypes";

export interface HotelType {
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  preview_image: string,
  images: string[],
  title: string,
  is_favorite: boolean,
  is_premium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  max_adults: number,
  price: number,
  goods: string[],
  host: {
    id: number,
    name: string,
    is_pro: boolean,
    avatar_url: string
  },
  description: string,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  id: number
};

export interface IComment {
  id: number,
  user: {
    id: number,
    is_pro: boolean,
    name: string,
    avatar_url: string
  },
  rating: number,
  comment: string,
  date: string
};

export interface IUserComment {
  comment: string,
  rating: number
};


export interface IAppState {
  hotels: HotelType[],
  comments: IComment[],
  activeFilter: string,
  activeSorting: string,
  isAuthNeed: boolean,
  isLoginLoaded: boolean,
  isHotelsLoaded: boolean,
  userInfo?: UserType
};

export interface LoginType {
  email: string,
  password: string
};

export interface UserType {
  id: number,
  email: string,
  name: string,
  avatar_url: string,
  is_pro: boolean
}

export type ThunkActionType = ThunkAction<Promise<void>, IAppState, AxiosInstance, ActionType>;
export type ThunkDispatchType = ThunkDispatch<IAppState, AxiosInstance, ActionType>;