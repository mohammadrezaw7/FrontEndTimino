import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProfilePage from './view/Profile/profilePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component = { ProfilePage } />
                </Switch>
            </div>
        </Router>
    )
}