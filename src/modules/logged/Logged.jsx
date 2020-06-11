import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import SignInClient from './containers/SignInClient';
import CheckInClient from './containers/CheckInClient';
export default class Logged extends Component {
    render() {
        return (
            <Switch>
                <Route path='/checkin' component={ CheckInClient } />
                <Route path='/signin' component={ SignInClient } />
            </Switch>
        )
    }
}
