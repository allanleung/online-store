import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Details from './Component/Details';
import Cart from './Component/Cart';
import Default from "./Component/Default";

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart}/>
                <Route component={Default}/>
            </Switch>
        </React.Fragment>
      </div>
    )
  }
}

/*
<div className="container">
    <div className="row">
    <div className="col-6"> column number one </div>
<div className="col-6"> <span>
                <i className="fas fa-home" />
            </span>
</div>
</div>
</div>
*/

export default App;
