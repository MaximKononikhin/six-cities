import { CITIES, SORTING_TYPES } from "../utils/constants";
import { IAppState } from "../utils/types"
import { ActionType, FILTER_HOTELS, LOAD_COMMENTS, LOAD_HOTELS, SET_AUTH, SORT_HOTELS } from "./actionTypes";

const inititalState: IAppState = {
  hotels: [],
  comments: [],
  activeFilter: CITIES[0],
  activeSorting: SORTING_TYPES[0],
  isAuthNeed: false
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
      }
    
    default: return state;
  }
}