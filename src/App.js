import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './View/Search/landingPage'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component = { LandingPage } />
                </Switch>
            </div>
        </Router>
    )
}