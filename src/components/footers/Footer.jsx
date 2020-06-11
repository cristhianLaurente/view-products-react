import React from 'react'
import logo from '../../assets/images/logo-circle.png'

const Footer = (props) => {
    return (
        <footer className="Footer" >
            <div className="Footer__header">
                <div className="Footer__header-img">
                    <img className='Footer__logo' src={logo} alt="logo"/>
                </div>
                <div className="Footer__header-items">
                    <div className='holu' >
                        <h2>Comunicate con Nosotros</h2>
                        <p>Arequipa: (054)-33333</p>
                        <p>informes@papaya.pe</p>
                    </div>
                    <div className='holu' >
                        <h4>Síguenos en:</h4>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-square"></i>
                    </div>
                </div>
                <div className="Footer__header-item">
                    <h3>Nosotros</h3>
                    <p>
                        <a>Cátalogo</a>
                    </p>
                    <p>
                        <a>Cónocenos</a>
                    </p>
                    <p>
                        <a>Responsabilidad Social</a>
                    </p>
                    <p>
                        <a>Trabaja con nosotros</a>
                    </p>
                </div>
                <div className="Footer__header-item">
                    <h3>Agrícultores | Proveedores</h3>
                    <a>Inscribirse</a>
                </div>
                <div className="Footer__header-item">
                    <h3>Políticas y condiciones</h3>
                    <p>Politica de Datos Personales</p>
                    <p>Condiciones de promociones</p>
                    <p>Términos y condiciones</p>
                </div>
            </div>
            <div className="Footer__body">
                <p>Copyright ® 2020 Papaya - All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
