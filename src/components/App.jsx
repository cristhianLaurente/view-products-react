import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Administrator from '../modules/administrator/Administrator';
import Invited from '../modules/invited/Invited';
// import Logged from '../modules/logged/index';
// import LogInClient from '../modules/logged/LogInClient';
import '../assets/styles/scss/App.scss'
import Login from '../modules/logged/Login';
import * as actions from '../actions/LoggedAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedSuccess } from '../actions/LoggedAction';
import Profile from '../modules/invited/containers/Profile';

class App extends Component {

    componentDidMount() {
        console.log(this.props.isLogged, 'props app'); 
        console.log(isLoggedSuccess(), 'haber'); 
    }

    render() {
        return (
            <Router>
            <Switch>
                <Route path='/admin' render={() => {
                    if(isLoggedSuccess()) {
                        return <Administrator />
                    } else {
                        return <Redirect to='/logged' />
                    }
                }} />
                <Route path='/logged' render={ () => {
                    if(isLoggedSuccess()) {
                        return <Redirect to='/admin' /> 
                    } else {
                        return <Login />
                    }
                    
                } } />
                <Route path='/' component={ Invited } />
            </Switch>
        </Router>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isLogged: state.get('LoggedReducer').get('isLogged')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
