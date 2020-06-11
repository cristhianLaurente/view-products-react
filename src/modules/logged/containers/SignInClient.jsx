import React, { Component } from 'react'
import SignInClientLayout from '../components/SignInClientLayout'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LoginContainer from '../components/LoginContainer'
import { connect } from 'react-redux';
import * as actions from '../../../actions/LoggedClientAction'
import { bindActionCreators } from 'redux'

class SignInClient extends Component {
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
        this.props.actions.signInClient(this.state)
    }


    render() {
        return (
            <SignInClientLayout>
                <LoginContainer>
                    <div className="LoginClient">
                        <div className="LoginClient__header">
                            <img src="" alt="logo"/>
                        </div>
                        <div className="LoginClient__body">
                            <form onSubmit={this.handleSubmit} >
                                <div className='LoginClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='correo electronico' 
                                        id="outlined-basic" 
                                        name='email' 
                                        variant="outlined"
                                        type='email'
                                        onChange={this.handleUpdateState}
                                    />
                                </div>
                                <div className='LoginClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='password' 
                                        id="outlined-basic" 
                                        name='password' 
                                        type='password'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}
                                    />
                                </div>
                                <div className="LoginClient__body-input">
                                    <button type='submit' >Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                        <div className="LoginClient__footer">
                            <div>
                                <Link to='/#' >Olvidé mi contraseña</Link>
                            </div>
                            <div>
                                <Link to='/checkin' >¿No tienes una cuenta?, Registrate ahora!</Link>
                            </div>
                        </div>
                    </div>                 
                </LoginContainer>
            </SignInClientLayout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

export default  connect(null, mapDispatchToProps)(SignInClient);
