import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data";
//create context object, has provider and consumer
const ProductContext = React.createContext();


// assiging storeProduct as a array
class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        cart:[]
    };

    componentDidMount() {
        this.setProduct();
    };

    setProduct = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        });
    };
    addToCart = id => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf((this.getItem(id)));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {product: tempProduct, cart: [...this.state.cart, product]};
        })
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}