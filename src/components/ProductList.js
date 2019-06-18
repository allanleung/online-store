import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import { storeProducts } from "../data2";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default class ProductList extends Component {
    state = {
        products: storeProducts
    };
    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <MainTitle>
                            <Title name="Newbie Friendly" title="Plants"/>
                        </MainTitle>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map ( product => {
                                        return <Product key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <Product />
        );
    }
}

const MainTitle = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;