import { CITIES, SORTING_TYPES } from "../utils/constants";
import { IAppState } from "../utils/types"
import { ActionType, FILTER_HOTELS, LOAD_COMMENTS, LOAD_HOTELS, SET_AUTH, SORT_HOTELS,
  SET_LOGIN_LOADING, SET_HOTELS_LOADING, SET_USER_INFO, LOAD_FAVORITES, UPDATE_HOTELS } from "./actionTypes";

const inititalState: IAppState = {
  hotels: [],
  comments: [],
  activeFilter: CITIES[0],
  activeSorting: SORTING_TYPES[0],
  isAuthNeed: true,
  isLoginLoaded: false,
  isHotelsLoaded: false,
  userInfo: null,
  favoriteHotels: []
};

export const reducer = (state = inititalState, action: ActionType): IAppState => {
  switch (action.type) {
    case LOAD_HOTELS: 
      return {
        ...state,
        hotels: action.payload
      };

    case LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };

    case FILTER_HOTELS:
      return {
        ...state,
        activeFilter: action.payload
      };

    case SORT_HOTELS:
      return {
        ...state,
        activeSorting: action.payload
      };

    case SET_AUTH:
      return {
        ...state,
        isAuthNeed: action.payload
      };

    case SET_LOGIN_LOADING: 
      return {
        ...state,
        isLoginLoaded: action.payload
      };
    
    case SET_HOTELS_LOADING: 
      return {
        ...state,
        isHotelsLoaded: action.payload
      };

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    
    case LOAD_FAVORITES:
      return {
        ...state,
        favoriteHotels: action.payload
      };

    case UPDATE_HOTELS:
      return {
        ...state,
        hotels: [...state.hotels.filter(hotel => hotel.id !== action.payload.id), action.payload],
        favoriteHotels: [...state.favoriteHotels.filter(hotel => hotel.id !== action.payload.id)]
      };

    default: return state;
  }
}