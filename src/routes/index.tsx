import { Route, Switch } from 'react-router-dom'

import About from '../pages/about'
import Home from '../pages/home'
import React from 'react'

const routes = (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </Switch>
    </div>
)

export default routes
