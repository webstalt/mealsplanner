import { SET_DAYS_DATA } from './weekScreen.actions';


export const weekScreenReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DAYS_DATA:
      return {
        ...state,
        ...action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};
