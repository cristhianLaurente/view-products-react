import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavbarToolbar from '../../components/navbar-demo/NavbarToolbar';
import Backdrop from '../../components/backdrops/Backdrop'
import Sidedrawer from '../../components/sidebars/Sidedrawer';
import Products from './containers/Products';
import Profile from './containers/Profile';
import Footer from '../../components/footers/Footer';
import CheckInClient from '../logged/containers/CheckInClient';
import SignInClient from '../logged/containers/SignInClient';
import { AuthService } from '../../services/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/ProductsAction';
import * as categories from '../../actions/invited/CategoriesAction';
import * as client from '../../actions/LoggedClientAction';
import Categories from './containers/Categories';
class Invited extends Component {

    _sAuth = new AuthService();

    constructor(props) {
        super(props)
        this.state = {
            sideDrawerOpen: false,
            search: 'Buscar'
        }
    }

    // responsive design sidebar
    handleSidebarToogle = () => {
        this.setState( prevState => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }



    componentDidMount() {
        this._sAuth.isloggedSuccessClient();
        this.props.categories.getCategoriesAsync();
    }




    // buscador
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.actions.searchAsync(this.input.value)
    }

    setInputRef = (element) => {
        this.input = element;
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state.sideDrawerOpen,
            search: e.target.value
        })
    }

    // products by categorie

    getProductByCategory = (id) => {
        // console.log(id);
        this.props.actions.getProductsByCategoryAsync(id)
    }

    render() {
        let backdrop;
        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        

        return (
            <Fragment>
                <NavbarToolbar 
                    logout={this.props.cliente.logoutClient}
                    setRef={this.setInputRef}  
                    handleSubmit={this.handleSubmit}  
                    handleChange ={this.handleInputChange}
                    valueSearch={this.state.search}
                    handleSidebarToogle={this.handleSidebarToogle}   
                    categories={this.props.categoriesState}
                    getProductByCategory={this.getProductByCategory}
                    />
                <Sidedrawer show={this.state.sideDrawerOpen}   />
                {backdrop}

                <Switch>

                    <Route exact path='/profile' >
                        {!this._sAuth.isloggedSuccessClient() ?  <Redirect from='/profile' to='/signin' exact /> : <Profile userLogged={this.state.userLogged} user={this.user} />    }
                    </Route>

                    <Route exact path='/checkin' render = {() => {
                        if(this._sAuth.isloggedSuccessClient()) {
                            return <Redirect to='/profile' />
                        }
                        return <CheckInClient />
                    
                    }} />

                    <Route exact path='/signin'>
                        { this._sAuth.isloggedSuccessClient() ? <Redirect from='/signin' to='/profile' exact /> : <SignInClient /> }
                    </Route>

                    <Route exact path='/products/categories/:categorie' render={() => <Categories  /> }  />

                    <Route exact path='/products' component={ Products } />
                    <Route exact path='/'>
                        <Redirect to='/products'/>
                    </Route>
                </Switch>

                <Footer />
            </Fragment>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        isLoggedClient: state.get('LoggedClientReducer').get('isLoggedClient'),
        categoriesState: state.get('CategoriesReducer').get('categories')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        categories: bindActionCreators(categories, dispatch),
        cliente: bindActionCreators(client, dispatch)
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (Invited);