import React from 'react';

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


const ChekIn = (props) => {
    const classes = useStyles();
    return (
        <div className='Login' >
            <div className="Login__card">
                <div className="Login__card-body">
                    <form className={classes.root} noValidate autoComplete="off">
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="nombre"  type="text" variant="outlined" />
                        </div>
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="apellido"  type="text" variant="outlined" />
                        </div>
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="nombre de usuario"  type="text" variant="outlined" />
                        </div>
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="Tefelono / celular"  type="number" variant="outlined" />
                        </div>
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="email"  type="email" variant="outlined" />
                        </div>
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="password"  type="password" variant="outlined" />
                        </div>
                        <div className='input' >
                        <TextField className='input__item' id="outlined-basic" label="password"  type="password" variant="outlined" />
                        </div>
                        <div className='button__container' >
                            <Button variant="contained" color="secondary">
                                Registrarse
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChekIn
