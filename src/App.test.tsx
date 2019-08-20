import store, { history } from './redux/store'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
   <Provider store={store}>
     <App history={history} />
   </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
