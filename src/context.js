import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";
import Details from "./components/Details";
//create context object, has provider and consumer
const ProductContext = React.createContext();


// assiging storeProduct as a array
class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProduct();
    }

    setProduct = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products:tempProducts}
        });
    };

    handleDetail = () => {
        console.log('lhello from details');
    };
    addToCart = (id) => {
        console.log(`hello from add to Cart.id is ${id}`);
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