import { combineReducers } from 'redux';
import { weekScreenReducer } from './weekScreen/weekScreen.reducer';

export const rootReducer = combineReducers({
  weekScreen: weekScreenReducer,
});
