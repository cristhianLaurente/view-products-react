import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import SignIn from './containers/SignIn';
class Login extends Component {
    render() {
        return (
            <Switch>
                <Route path='/logged' render={() => <SignIn /> } />
            </Switch>
        )
    }
}

export default  withRouter(Login)