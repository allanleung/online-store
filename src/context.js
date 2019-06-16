import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data";
//create context object, has provider and consumer
const ProductContext = React.createContext();


// assiging storeProduct as a array
// cart should be empty array [], but for testing, we put all the store product
class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        cart:storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProduct();
    };

    incrementProduct = (id) => {
        console.log(`adding item to cart`)
    };

    decrementProduct = (id) => {
        console.log(`removing item from cart`)
    };

    removingItem = (id) => {
        console.log(`removing item`)
    }

    clearCart = () => {
        console.log(`cart was cleared`)
    }


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

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.incrementProduct,
                decrement: this.decrementProduct,
                removeItem: this.removingItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}