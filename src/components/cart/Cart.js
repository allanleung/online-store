import React, {Component} from 'react';
import Title from '../Title';
import {ProductConsumer} from "../../context";
import EmptyCart from "./EmptyCart";

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                    <React.Fragment>



                        <EmptyCart/>
                    </React.Fragment>
            </ProductConsumer>
        );
    }
}