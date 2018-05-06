import React, { Component } from 'react';
import AppActions from './actions/app-actions';
import Catalog from './components/catalog/Catalog';
import CatalogDetail from './components/product/CatalogDetail';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/item/:item" component={CatalogDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
