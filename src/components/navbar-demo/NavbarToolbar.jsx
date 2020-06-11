import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { AuthService } from '../../services/Auth';
import SelectDemo from '../selects/SelectDemo';
// import logo from '../../assets/images/logo-circle.png'
import Logo from '../icons/Logo';
import perfil from '../../assets/images/perfil.png'

const NavbarToolbar = (props) => {

    const _sAuth = new AuthService();

    const [settings, setSettings] = React.useState(false)
    return (
        <header className="Toolbar" >
            <div>
                <div className="Toolbar__navigation">
                <div className="Toolbar__toggle-button">
                    <MenuIcon onClick={props.handleSidebarToogle}  />
                </div>
                <div className="Toolbar__Logo">
                    <Logo size={15}  />
                    {/* <img src={logo} alt=""  /> */}
                </div>
                <div className="Toolbar__navigation-items">
                    <form onSubmit={props.handleSubmit} >
                        <input 
                            ref={props.setRef}
                            className='navigations__input' 
                            type='text' 
                            name='search' 
                            onChange={props.handleChange}
                            value={props.value}
                            placeholder='Buscar' 
                            />
                    </form>
                </div>
                <div className='btn__container'>
                    {
                        _sAuth.isloggedSuccessClient() ? (
                            <Fragment>
                                <div >
                                    <div className='btn-profile' >
                                        <div className='btn-profile__img' >
                                            <img src={perfil} alt=""/>
                                        </div>
                                        <div className='btn-profile__name'>
                                            Cristhian Laurente
                                        </div>
                                        <div className='btn-profile__icon' onClick={() => {
                                            setSettings(!settings)
                                        }} >
                                            <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                {
                                    settings && (
                                        <div className='profile__settings' >
                                            <div className='profile__settings-link' >  
                                                <Link to='/profile' >perfil</Link>
                                            </div>
                                            <div  className='profile__settings-link' onClick={() => {
                                                props.logout()
                                                window.location.reload();
                                                setSettings(false)
                                            }} >
                                                
                                                Cerrar Sesión                                                
                                                
                                            </div>
                                            <div className='profile__settings-close'  onClick={() => {
                                                setSettings(!setSettings)
                                             }} >
                                                x
                                            </div>
                                        </div>
                                    )
                                }
                            </Fragment>
                        ) : (
                            <div>
                                <Link className='btn__signin-client' to='/signin' >Iniciar Sesión</Link>
                            </div>
                        )
                    }
                </div>
            </div>
            </div>
            <div className='Categories__nav'>
                
                <div className='Categories__nav-item' >
                    <SelectDemo  getProductByCategory={props.getProductByCategory}  categories={props.categories} />
                </div>
                <nav className='Categories__nav-item' >
                    <ul>
                        {
                            props.categories.map(res => {
                                
                                return (
                                    <li key={res.id_cat}>
                                        <Link 
                                        onClick={() => {
                                            props.getProductByCategory(res.id_cat)
                                        }} 
                                        to={`/products/categories/${res.cat_nom}`} 
                                        >
                                            {res.cat_nom}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className='Nav__footer' >                
            </div>
        </header>
    )
}

export default NavbarToolbar