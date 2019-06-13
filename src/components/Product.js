import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

export default class Product extends Component {
    render() {
        // Look for these properties in products
        const {id, title, img, price, inCart} = this.props.product;
        return (
            // add bookstrap here
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="imag-container p-5"
                        // debugging purpose
                         onClick={() =>
                             console.log('You clicked me on the image container')}
                    >

                        <Link to="/>details" >
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    console.log("You added to the cart");
                                }}
                        >
                        {inCart ? (<p className="text-capitalize mb-0" disabled> {" "}in inCart </p>) : (
                            <i className="fas fa-cart-plus"/>)}
                        </button>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}
const ProductWrapper = styled.div`

`;