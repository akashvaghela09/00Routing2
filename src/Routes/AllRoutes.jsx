import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import {AllUsers} from './AllUsers'
import { User } from './User'

const AllRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <h3>About</h3>
                </Route>
                <Route exact path="/user">
                    <AllUsers />
                </Route>
                <Route path="/user/:id">
                    <User />
                </Route>
                <Route>
                    <h3>Not Found</h3>
                </Route>
            </Switch>
        </>
    )
}

export {AllRoutes}