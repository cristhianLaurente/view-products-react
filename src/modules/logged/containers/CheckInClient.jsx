import React, { Component } from 'react'
import LoginContainer from '../components/LoginContainer'
import CheckInClientLayout from '../components/CheckInClientLayout'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../../actions/CheckInClientAction';
import { bindActionCreators } from 'redux'
import swal from '@sweetalert/with-react';



class CheckInClient extends Component {
    state = {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',  
            celular: '',
            username: '', 
        },
        errors: {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            passwordConfirmatedError: '',
            celularError: '',
        },
        // confirmated: false
    }


    handleUpdateState = (e) => {
        let errors = {};
        let isErr = false;


        const {user} = this.state

        if(e.target.name === 'email' ) {
            if(!user.email.includes('@')) {
                isErr = true;
                errors.emailError = 'Requiere correo electrónico valido email@hosting.com'
            } else {
                isErr = false;
                errors.emailError = ''
            }
        }
        if(e.target.name === 'password' ) {
            if(user.password.length <= 8) {
                isErr = true;
                errors.passwordError = 'Contraseña debe contener más de 8 dígitos'
            }else {
                isErr = false;
                errors.passwordError = ''
            }
        }
        if(e.target.name === 'password_confirmation' ) {
            if(user.password !== user.password_confirmation) {
                isErr = true;
                errors.passwordConfirmatedError = 'No coinciden'
            }else {
                isErr = false;
                errors.passwordConfirmatedError = ''
            }
        }

        if(isErr) {
            this.setState({
                user: {
                    ...this.state.user,
                }, 
                errors : errors
            })
        }



        this.setState({
            user: {
                ...this.state.user,
                [e.target.name] : e.target.value
            },
            errors: errors
        })


        

    }

    validate = () => {
        let isErr = false;

        let required = 'Este campo es requerido'

        const errors = {};



        const {user} = this.state

        if(user.first_name.length === 0 ) {
            isErr = true;
            errors.firstNameError = required
        }

         if(user.last_name.length === 0) {
            isErr = true;
            errors.lastNameError = required
        }


        if(user.email.indexOf("@") === -1) {
            isErr = true;
            errors.emailError = 'Requiere correo electrónico valido email@hosting.com'
        }



        if(user.password.length <= 8) {
            isErr = true;
            errors.passwordError = 'Contraseña debe contener más de 8 dígitos'
        }

        if(user.password !== user.password_confirmation) {
            isErr = true;
            errors.passwordConfirmatedError = 'No coinciden'
        }
        if(user.celular.length < 8) {
            isErr = true;
            errors.celularError = 'debe contener más de 9 digitos'
        }

        if(isErr) {
            this.setState({
                user: {
                    ...this.state.user,
                }, 
                errors : errors
            })
        }
        return isErr;
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const err = this.validate();
        if(!err) {
            this.props.actions.checkinClientAsync(this.state.user)
            swal(
                <div>
                  <h1>Registro Exitoso!</h1>        
                  <p>Usted se ha registrado correctamente!</p>
                  <hr/>
                  <p><strong>revise</strong> porfavor su <strong>correo electrónico para validar su cuenta</strong></p>
                </div>
            )
        }
    }




    render() {

        return (
            <CheckInClientLayout>
                <LoginContainer>
                <div className="RegisterClient">
                        <div className="Register__header">
                            <img src="" alt="logo"/>
                        </div>
                        <div className="RegisterClient__body">
                            <form onSubmit={this.handleSubmit} >
                                <div className='RegisterClient__body-input' >


                                    <TextField 
                                        className='input__item'

                                        label='Nombres' 

                                        error={this.state.errors.firstNameError}
                                        helperText={this.state.errors.firstNameError}

                                        id="outlined-basic" 
                                        name='first_name' 
                                        variant="outlined"
                                        type='text'
                                        onChange={this.handleUpdateState}
                                        
                                    />


                                </div>
                                <div className='RegisterClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='Apellidos' 
                                        helperText={this.state.errors.lastNameError}
                                        error={this.state.errors.lastNameError}
                                        id="outlined-basic" 
                                        name='last_name' 
                                        type='text'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}                                                                                
                                    />
                                    
                                </div>
                                <div className='RegisterClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='Nombre de Usuario' 
                                        helperText={this.state.errors.lastNameError}
                                        error={this.state.errors.lastNameError}
                                        id="outlined-basic" 
                                        name='username' 
                                        type='text'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}                                                                                
                                    />

                                </div>

                                <div className='RegisterClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='Correo Electronico' 
                                        helperText={this.state.errors.emailError}
                                        error={this.state.errors.emailError}
                                        id="outlined-basic" 
                                        name='email' 
                                        type='text'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}
                                        
                                        
                                    />
                                </div>
                                <div className='RegisterClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='Password' 
                                        helperText={this.state.errors.passwordError}
                                        error={this.state.errors.passwordError}
                                        id="outlined-basic" 
                                        name='password' 
                                        type='password'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}
                                        
                                        
                                    />
                                </div>
                                <div className='RegisterClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='Confirmar password' 
                                        error={this.state.errors.passwordConfirmatedError}
                                        helperText={this.state.errors.passwordConfirmatedError}
                                        id="outlined-basic" 
                                        name='password_confirmation' 
                                        type='password'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}
                                        
                                        
                                    />
                                </div>
                                <div className='RegisterClient__body-input' >
                                    <TextField 
                                        className='input__item'
                                        label='N° celular' 
                                        helperText={this.state.errors.celularError}
                                        error={this.state.errors.celularError}
                                        id="outlined-basic" 
                                        name='celular' 
                                        type='number'
                                        variant="outlined"
                                        onChange={this.handleUpdateState}                                                                                
                                    />
                                </div>
                                <div className="RegisterClient__body-input">
                                    <button type='submit' >Registrarse</button>                                    
                                </div>
                            </form>
                        </div>
                        <div className="RegisterClient__footer">
                            <div>
                                <Link to='/signin' >¿Ya tienes una cuenta?, iniciar sesión</Link>
                            </div>
                        </div>
                    </div> 
                </LoginContainer>
            </CheckInClientLayout>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        checkin: state.get('CheckInClientReducer').get('user')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CheckInClient)
