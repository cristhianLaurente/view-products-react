import React from "react";
import { Link } from 'react-router-dom';
import perfil from '../../../../assets/images/perfil.png'
const ProfileSidebar = (props) => {
  console.log(props)
  return (
    
    <div className="Profile__left">
      <div className="Profile__left-img">
        <img src={perfil} alt="user foto" width={10} />
      </div>
      <nav className="Profile__left-body">
        <ul>
          <li>
            <Link to="/products">Inicio</Link>
          </li>
          <li>
            <Link to="/profile">Información Personal</Link>
          </li>
          <li>
            <Link to="/">Productos para ti</Link>
          </li>
          <li>
            <Link to='/'>
              Tús descuentos <span>Papaya</span>
            </Link>
          </li>
          <li>
            <Link to='/'>Seguridad</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
;

export default ProfileSidebar;
