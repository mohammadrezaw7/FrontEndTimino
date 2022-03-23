import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Search from './components/pages/Search'
/*
import LandingPage from './components/pages/LandingPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'
*/

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Search } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
    <h1>
        
    </h1>
    )
}

/*
const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
*/
