import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product image */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-mute mt-3 mb-2">
                                        Manufacture by :
                                        <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span> $</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product Info :
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* the two buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Back to Product
                                            </ButtonContainer>
                                        </Link>
                                        {/* if inCart = true, disbale = true, if inCart = False,  */}
                                        <ButtonContainer
                                            cart
                                            disabled = {inCart?true:false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                        }}
                                        >
                                            {inCart ? inCart : "Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>

                                {/* title */}


                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;