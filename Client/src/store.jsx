import { getAllBooksReducer, getBookByIdReducer } from './reducers/bookReducer'
import {addToCartReducer} from './reducers/CartReducer'

import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
})
const finalReducer = combineReducers({
  getAllBooksReducer: getAllBooksReducer,
  getBookByIdReducer: getBookByIdReducer,
  addToCartReducer: addToCartReducer,
})

const store = createStore(
  finalReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
)

export default store;

