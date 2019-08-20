import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer, { IState } from './reducers'

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const initialState: Partial<IState> = {
}

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))),
)

export default store
