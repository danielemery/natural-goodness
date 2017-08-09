import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {cognito} from 'react-cognito/src/reducers.js'
import orders from './orders'

export default combineReducers({
  routing: routerReducer,
  orders,
  cognito
})