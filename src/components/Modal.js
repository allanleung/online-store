import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modelOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if (!modelOpen) {
                        return null;
                    } else
                        return (
                            <ModelContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h4> Items Added to Cart</h4>
                                        </div>
                                    </div>
                                </div>
                            </ModelContainer>
                        );
                }}
            </ProductConsumer>
        );
    }
}

const ModelContainer = styled.div`

`;