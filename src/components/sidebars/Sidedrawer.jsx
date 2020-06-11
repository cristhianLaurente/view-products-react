import React from 'react'
import { Link } from '@material-ui/core'

const Sidedrawer = (props) => {

    let drawerClasses = ['Side-drawer']

    if(props.show) {
        drawerClasses = 'Side-drawer open' ;
    }

    return (
        <nav className={ drawerClasses} >
            <ul>
                <li> <Link to='/' >Inicio</Link></li>
                <li> <Link to='/products' >Productos</Link> </li>
            </ul>
        </nav>
    )
}

export default Sidedrawer;
