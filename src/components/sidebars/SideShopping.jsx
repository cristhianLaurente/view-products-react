import React from 'react'
import { Link } from '@material-ui/core'

const SideShopping = (props) => {

    let shoppingClasses = ['Side-shopping']

    if(props.show) {
        shoppingClasses = 'Side-shopping open' ;
    }

    return (
        <div className={ shoppingClasses} >
            <div className="Shopping__header">
                <div className="Shopping__icon" >
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="Shopping__list">
                    Lista de compras:
                    <div>
                        Limpiar Carrito
                    </div>
                </div>
                <div className="Shopping__products">
                    <p><span>0</span> productos</p>
                </div>
                <div className="Shopping__close" onClick={props.closeModal} >
                    <i className="far fa-window-close"></i>
                </div>
            </div>
            <div className="Shopping__body">
                vacio
            </div>
            <div className="Shopping__footer">
                <div className="Shopping__items">
                    <div className="Shopping__description">
                        <div className="Shopping__p">
                            <p>Subtotal</p>
                            <p>Subtotal</p>
                            <p>Subtotal</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="Shopping__price">
                            <p><span>$</span> 0</p>
                            <p><span>$</span> 0</p>
                            <p><span>$</span> 0</p>
                            <p><span>$</span> 0</p>
                        </div>
                    </div>
                    <div className='Shopping__free' >
                        <p>Te faltan $99.00 para el recibo gratis</p>
                    </div>
                    <div className="Shopping__button">
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideShopping;