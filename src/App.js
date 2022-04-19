import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Complete from './View/Search/Search'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Complete } />
                </Switch>
            </div>
        </Router>
    )
}