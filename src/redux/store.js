import { combineReducers, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

import authReducer from './auth.slice'

export const rootReducer = combineReducers({
  auth: authReducer,
})

export const makeStore = () => {
  return createStore(rootReducer)
}

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: false});