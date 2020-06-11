import React, { Component } from 'react'
import SignInLayout from '../components/SignInLayout'
import { TextField } from '@material-ui/core'
import img from '../../../assets/images/socios.png'
import logo from '../../../assets/images/Logo.png'
import { connect } from 'react-redux';
import * as actions  from '../../../actions/LoggedAction';
import { bindActionCreators } from 'redux'

class SignIn extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }    
    }


    handleUpdateState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.actions.signIn(this.state)
  
    }


    render() {
        return (
            <SignInLayout>
                <section className="Login">
                    <section className="Login__card">
                        <div className="Login__card-left">
                            <div className="Login__card-left-header">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="Login__card-left-body">
                                <h1>LOGIN</h1>
                                <form onSubmit={this.handleSubmit} >
                                <div className='Login__card-left-body-input' >
                                    <TextField 
                                        className='input__item-login'
                                        label='correo electronico' 
                                        id="outlined-basic" 
                                        name='email' 
                                        // variant="outlined"
                                        type='email'
                                        onChange={this.handleUpdateState}
                                    />
                                </div>
                                <div className='Login__card-left-body-input' >
                                    <TextField 
                                        className='input__item-login'
                                        label='password' 
                                        id="outlined-basic" 
                                        name='password' 
                                        type='password'
                                        onChange={this.handleUpdateState}
                                        // variant="outlined"
                                        
                                    />
                                </div>
                                <div className="Login__card-left-body-input">
                                    <button type='submit' >Iniciar Sesión</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="Login__card-right">
                            <img src={img} alt='img' />
                        </div>
                    </section>
                </section>
            </SignInLayout>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (SignIn)