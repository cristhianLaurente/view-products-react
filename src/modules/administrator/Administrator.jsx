import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Sidebar from '../../components/sidebars/Sidebar';

export default class Administrator extends Component {
    handleClick = (e) => {
        console.log(e);
    }
    render() {
        return (
            <Fragment>
                <section className='Container' >
                    <Sidebar handleClick={this.handleClick}  />
                    <Switch>
                        <Route path='/admin' component={ HomePage } />
                    </Switch>
                </section>
            </Fragment>
        )
    }
}
