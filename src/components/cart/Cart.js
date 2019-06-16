import React, {Component} from 'react';
import Title from '../Title';
import {ProductConsumer} from "../../context";
import EmptyCart from "./EmptyCart";
import CartColumns from "./CartColumns"
import CartList from "./CartList"

export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                   {value => {
                       const {cart} = value;
                       {/* if cart is empty, show stuff insisde React.Fragment */}
                       if (cart.length > 0) {
                           return (
                               <React.Fragment>
                               <Title name={"my"} title={"cart"}/>
                               <CartColumns/>
                               <CartList value={value} />
                               </React.Fragment>
                           )
                       }
                       else {
                           return <EmptyCart/>;
                       }
                   }}
               </ProductConsumer>
           </section>
        );
    }
}