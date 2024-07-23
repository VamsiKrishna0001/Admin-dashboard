import { combineReducers } from 'redux';
import analytics from './analytics';

const rootReducer = combineReducers({
  analytics: analytics,
});

export default rootReducer;
