import React, { Component } from 'react'
import CategorieLayout from '../components/CategorieLayout';
import ContainerGrid from '../components/ContainerGrid';
import Products from '../components/products/Products';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions  from '../../../actions/ProductsAction';
import * as presentations from '../../../actions/PresentationsAction';
import ModalContent from '../../../components/modals/ModalContent';
import ProductPresentation from '../components/products/ProductPresentation';
import ModalContainer from '../../../components/modals/ModalContainer';
class Categories extends Component {
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

    render() {
        console.log(this.props.products,'props');
        return (
            <CategorieLayout>
                <ContainerGrid>
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
            </CategorieLayout>
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
export default connect(mapStateToProps,mapDispatchToProps) (Categories)