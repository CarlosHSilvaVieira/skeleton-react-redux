import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import React from 'react'
import routes from './routes'

interface IPropTypes {
  history: History
}

const App: React.FC<IPropTypes> = (props) => {
  return (
    <ConnectedRouter history={props.history}>
      { routes }
    </ConnectedRouter>
  )
}

export default App
