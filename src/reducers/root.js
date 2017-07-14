import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import orders from './orders';
import users from './users';

export default combineReducers({
  routing: routerReducer,
  orders,
  users
});
