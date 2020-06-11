import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Login = (props) => {
    const classes = useStyles();

    console.log(props, 'login')
    return (
        <div className='Login' >
            <div className="Login__card">
                <div className="Login__card-body">
                    <form 
                        className={classes.root} 
                        noValidate autoComplete="off"
                        onSubmit={props.initSesion}
                    >
                        <div className='input' >
                        <TextField 
                            className='input__item' 
                            id="outlined-basic" 
                            label="email" 
                            variant="outlined" 
                            name='email'
                            type='email'
                            onChange={props.handleUpdateState}
                        />
                        </div>
                        <div className='input' >
                        <TextField 
                            className='input__item' 
                            id="outlined-basic" 
                            label="password" 
                            variant="outlined" 
                            name='password'
                            type='password'
                            onChange={props.handleUpdateState}
                        />
                        </div>
                        <div className='button__container' >
                            <Button 
                                variant="contained" 
                                color="secondary"
                                type='submit'
                            >
                                Iniciar Sesión
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
