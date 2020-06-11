import React, { Component } from 'react'
import ProductLayout from '../components/ProductLayout'

import Products from '../components/products/Products';
import ContainerGrid from '../components/ContainerGrid';
import ContainerHeader from '../components/ContainerHeader';
import Carrito from '../components/products/Carrito';

import Backdrop from '../../../components/backdrops/Backdrop'
import SideShopping from '../../../components/sidebars/SideShopping';
import ModalContainer from '../../../components/modals/ModalContainer';
import ModalContent from '../../../components/modals/ModalContent';
import ProductPresentation from '../components/products/ProductPresentation';

// redux
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

// actions
import * as actions  from '../../../actions/ProductsAction';
import * as presentations from '../../../actions/PresentationsAction';
class ProductsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sideShoppingOpen: false,
            productModal: false,
            product: {},
        }
    }



    handleSidebarShopping = () => {
        this.setState( prevState => {
            return {sideShoppingOpen: !prevState.sideShoppingOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideShoppingOpen: false })
    }

    product = (prod) => {
        this.props.presentations.getPresentationsAsync(prod.id_prod);
        this.setState({
            ...this.state.sideShoppingOpen,
            ...this.state.productModal,
            product: prod
        })
    }
    openDetailProductModal = () => {

        this.setState({ productModal: true })
    }

    closeModal = (e) => {
        this.setState({ sideShoppingOpen: false, productModal: false })
    }


    componentDidMount() {
        this.props.actions.getProductsAsync();    
    }

    

    render() {
        let backdrop;
        if(this.state.sideShoppingOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <ProductLayout>
                <ContainerHeader>
                    <Carrito handleSidebarShopping={this.handleSidebarShopping} />
                    <SideShopping show={this.state.sideShoppingOpen} closeModal={this.closeModal} />
                    {backdrop}
                </ContainerHeader>
                <ContainerGrid>
                    {/* <Categories /> */}
                    <Products 
                        openModal={this.openModal}
                        openDetailProductModal={this.openDetailProductModal}
                        products={this.props.products}
                        product={this.product}
                    />
                </ContainerGrid>   
                {
                    this.state.productModal &&
                    <ModalContainer >
                        <ModalContent closeModal={this.closeModal} size={500} >
                            <ProductPresentation   
                                product={this.state.product}  
                                presentations={this.props.presentationsState}                                
                            />
                        </ModalContent>
                    </ModalContainer>
                }
            </ProductLayout>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.get('ProductsReducer').get('products'),
        presentationsState: state.get('PresentationsReducer').get('presentations')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        presentations: bindActionCreators(presentations, dispatch)
    }
} 

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer)