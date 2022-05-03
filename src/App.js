import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PublicProfile from './view/ProfilePublic/profilePage'
import ProfilePage from './view/Profile/profilePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component = { ProfilePage } />
                    <Route exact path="/public" component = { PublicProfile } />
                </Switch>
            </div>
        </Router>
    )
}