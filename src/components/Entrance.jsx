import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './Login'
import Logo from './Logo'
import Register from './Register'
import Welcome from './Welcome'

const Entrance = () => {
    return (
        <React.Fragment>
            <Logo />
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Welcome} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                    </Switch>
                </BrowserRouter>
            </div>
        </React.Fragment>
    )
}

export default Entrance
