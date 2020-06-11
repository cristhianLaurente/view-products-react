import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <div className="Sidebar" >
            <div className="Sidebar__logo" > 
                <img src="" alt="logo"/>
            </div>
            <nav className='Sidebar__nav' >
                <ul>
                    <li>
                        <Link to='/admin' >Inicio</Link>  <i class="fas fa-chevron-right"></i>
                    </li>
                    <li>
                        <div>
                            <div>
                                <Link to='/admin/user' onClickCapture={props.handleClick}  >Usuario</Link>   
                                <i class="fas fa-chevron-right"></i>
                            </div>
                            <div >
                                holu
                            </div>
                        </div>

                    </li>
                    <li>
                        <Link to='/admin/categorys' >Categorias</Link>   <i class="fas fa-chevron-right"></i>
                    </li>
                    <li>
                        <Link to='/admin/almacen' >Almacen</Link>   <i class="fas fa-chevron-right"></i>
                    </li>
                    <li>
                        <Link to='/admin/help' >Help</Link>   <i class="fas fa-chevron-right"></i>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
