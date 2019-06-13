import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";
import Details from "./components/Details";
//create context object, has provider and consumer
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts, detailProduct: detailProduct
    }
    handleDetail = () => {
        console.log('lhello from details');
    };
    addToCart = () => {
        console.log('lhello from add to Cart');
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}