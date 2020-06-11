import React from 'react';
import Agregar from '../../../../components/icons/Agregar';



const Products = (props) => {
    console.log(props,'ga');
    if(props.products.length === 0) {
        return (
            <div className='Products' style={{marginBottom: '45vh'}} >
                no se encontraron productos
            </div>
        )
    }else {
        return (
            <div className='Products' > 
                {
                props.products.map(prod => {
                    return (
                        <div className="Card__products" key={prod.id_prod}  >
                        <div className="Card__products-header">
                            <div className='Card__img' >
                                <img src={prod.prod_img} alt="imagen del producto" />
                                <span>30%</span>
                                <p>{prod.prod_nom}</p>
                            </div>
                        </div>
                        <div className="Card__products-body">
                            <div className="Card__products-description">
                                <p> <span>S/.</span> {prod.prod_precio}</p>
                            </div>
                            <div className="Card__products-actions">
                                <div className="Card-products-carrito" onClick={() => { 
                                            props.openDetailProductModal(prod.id_prod)
                                            props.product(prod)
                                        }} >
                                    <Agregar size={35} color='#FFAD01' />    
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
     
            </div>
        )
    }
}

export default Products;
