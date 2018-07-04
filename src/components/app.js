import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Landing from './landing';
import Home from './home';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">Jam</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/home" component={Home} />
                </main>
            </div>
        </Router>
    );
}