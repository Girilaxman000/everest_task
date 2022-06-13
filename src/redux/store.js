import { combineReducers, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

import cartReducer from './cart.slice'

export const rootReducer = combineReducers({
  cart: cartReducer,
})

export const makeStore = () => {
  return createStore(rootReducer)
}

export const wrapper = createWrapper(makeStore, {debug: false});