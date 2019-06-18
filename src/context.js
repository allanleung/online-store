import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data2";
//create context object, has provider and consumer
const ProductContext = React.createContext();

// assiging storeProduct as a array
// cart should be empty array [], but for testing, we put all the store product
class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        taxRate: 0.12
    };

    componentDidMount() {
        this.setProduct();
    };

    incrementProduct = (id) => {
        console.log(`adding item to cart`);
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        // get specific product
        const product = tempCart[index];
        // need to change the count, quantity and total price.
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
              };
            }, () => {
                this.addTotal();
            }
        );
    };

    decrementProduct = (id) => {
        console.log(`removing item from cart`);
        // not the best practice :|
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        // get specific product
        const product = tempCart[index];
        product.count = product.count - 1;
        // edge case of 0
        if (product.count === 0) {
            this.removingItem(id);
        }
        else {
            product.total = product.count * product.price;
            this.setState(() => {
                    return {
                        cart: [...tempCart]
                    };
                }, () => {
                    this.addTotal();
                }
            );
        }
    };

    removingItem = (id) => {
        console.log(`removing item`);
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => {
            return item.id !== id;
        });
        const index = tempProduct.indexOf(this.getItem(id));
        let removeProduct = tempProduct[index];
        // removing product and on callback, return total
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;
        this.setState(() => {
                return {
                    cart: [...tempCart],
                    product: [...tempProduct]
                };
            }, () => {
                this.addTotal();
            }
        );
    };

    clearCart = () => {
        console.log(`cart was cleared`);
        // return empty array
        this.setState(() => {
            return {cart: []};
        }, () => {
            this.setProduct();
            this.addTotal()
        });
    };

    addTotal = () => {
        let subTotal = 0;
        // loops throught the item array and add everything
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * this.state.taxRate;
        // 2 decimel place
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
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
            }, () => {
                this.addTotal();
            }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true};
        });
    };
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false};
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