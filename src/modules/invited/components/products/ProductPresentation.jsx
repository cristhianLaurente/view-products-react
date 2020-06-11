import React, { Fragment } from 'react';
import CheckboxLabels from '../../../../components/checboxs/CheckboxLabels';
import Agregar from '../../../../components/icons/Agregar';
import Quitar from '../../../../components/icons/Quitar';

const ProductPresentation = (props) => {

    const [priceUnit, setPriceUnit] = React.useState(0)
    const [priceUnitCount, setPriceUnitCount] = React.useState(0)


    const [priceBox, setPriceBox] = React.useState(0);
    const [priceBoxCount, setPriceBoxCount] = React.useState(0);

    const [checkboxUnit, setCheckboxUnit] = React.useState(false)
    const [checkboxBox, setCheckboxBox] = React.useState(false)
    
    const handleChange = (event, name) => {
       
        if(!event[name] && name === 'unit') {
            setCheckboxUnit(false)
        }  
        if(event[name] && name === 'unit') {
            setCheckboxUnit(true)
        }  
        if(!event[name] && name === 'box') {
            setCheckboxBox(false)
        }  
        if(event[name] && name === 'box') {
            setCheckboxBox(true)
        }  
    }

    return (
        <div className='ProductPresentation' >
            <div className="Product__header">
                <h2>{props.product.prod_nom}</h2>
            </div>
            <div className="Product__body">
                <div className="Product__img">
                    <img src={props.product.prod_img} alt="producto"/>
                </div>
            </div>
            <div className="Product__footer">
                {
                    props.presentations.map( res => {
                        // console.log(res, 'map');                         
                        return (
                            <div className="PresentationCard" key={res.id_pres} >
                            <div className="PresentationCard__top">
                                <h3>{res.pres_nom}</h3>
                            </div>
                            <div className="PresentationCard__bottom">
                                <div className="PresentationCard__bottom-left">

                                    <CheckboxLabels  
                                        name='unit' 
                                        description={`S/. ${res.pres_precio} C/U`} 
                                        handleChange={handleChange}                                        
                                    />
                                    <CheckboxLabels 
                                        name='box' 
                                        handleChange={handleChange}                                          
                                        description={`S/. ${res.pres_precio_caja} x caja `} 
                                    />
                                </div>
                                <div className="PresentationCard__bottom-right">
                                    <div className="PresentationCard__actions">
                                    {
                                            checkboxUnit && (
                                                <Fragment>
                                                    <div className="PresentationCard__actions-icon" 
                                                        onClick={() => {
                                                            let operacion = priceUnit - +(res.pres_precio)   
                                                            if(operacion <= 0) {
                                                                setPriceUnit(0)
                                                                setPriceUnitCount(0)
                                                            }
                                                            if(operacion >= 0) {
                                                                setPriceUnit(operacion.toFixed(2));
                                                                setPriceUnitCount(priceUnitCount - 1);
                                                            }                                             
                                                        }} 
                                                    >
                                                        <Quitar size={18} color='#FFAD01' />                                                                                    
                                                    </div>
                                                    <div className='PresentationCard__actions-price' >
                                                        {priceUnit}
                                                        <br/>
                                                        {priceUnitCount}
                                                    </div>
                                                    <div className="PresentationCard__actions-icon" 
                                                    onClick={() => {
                                                        let operacion = +priceUnit + (+(res.pres_precio));      
                                                        let priceTotal = res.pres_unidades_max * res.pres_precio;  
                                                        // let limite = res.pres_unidades_max / res.pres_precio;                                                                                                                                                                                                                         
                                                        if(priceUnit < +priceTotal.toFixed(2) ) {
                                                            setPriceUnit(+operacion.toFixed(2)) 
                                                            setPriceUnitCount(priceUnitCount +1 )                                              
                                                        }                                                                                                            
                                                    }} 
                                                    >
                                                        <Agregar  size={18} color='#FFAD01' />
                                                    </div>
                                                </Fragment>
                                            ) 
                                    }
                                    </div>

                                    <div className="PresentationCard__actions">
                                        {
                                            checkboxBox && (
                                                <Fragment>
                                                    <div className="PresentationCard__actions-icon" 
                                                        onClick={() => {
                                                            let operacion = priceBox - +(res.pres_precio_caja)   
                                                            if(operacion <= 0) {
                                                                setPriceBox(0)
                                                                setPriceBoxCount(0)
                                                            }
                                                            if(operacion >= 0) {
                                                                setPriceBox(operacion.toFixed(2));
                                                                setPriceBoxCount(priceUnitCount - 1);
                                                            }                                             
                                                        }} 
                                                    >
                                                        <Quitar size={18} color='#FFAD01' />

                                                    </div>
                                                    <div className='PresentationCard__actions-price' >
                                                        {priceBox} 
                                                        <br/>
                                                        {priceBoxCount} 
                                                    </div>
                                                    <div className="PresentationCard__actions-icon"
                                                    onClick={() => {
                                                        let operacion = +priceBox + (+(res.pres_precio_caja));      
                                                        let priceTotal = res.pres_unidades_max * res.pres_precio_caja;  
                                                        // let limite = res.pres_unidades_max / res.pres_precio;                                                                                                                                                                                                                         
                                                        if(priceBox < +priceTotal.toFixed(2) ) {
                                                            setPriceBox(+operacion.toFixed(2)) 
                                                            setPriceBoxCount(priceBoxCount +1 )                                              
                                                        }                                                                                                            
                                                    }}  
                                                    >
                                                        <Agregar  size={18} color='#FFAD01' />
                                                    </div>
                                                </Fragment>
                                            )
                                        }
                                    </div>
        
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                <div className="btn__add-presentation">
                    <button>Agregar</button>
                </div>
            </div>
        <div>          
        </div>
        </div>
    )
}

export default ProductPresentation


