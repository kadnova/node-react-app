import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Feedback from './components/feedback';
import Results from './components/results';

const Routes = () => (
    <HashRouter >
        <Switch>
            <Route  exact path='/' component={Home}/>
            <Route exact path='/fb' component={Feedback}/>
            <Route exact path='/fb/results' component={Results}/>
        </Switch>
    </HashRouter>
);

export default Routes;