import React from 'react';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="row"
      style={{
        paddingBottom: '25px'
      }}
    >
      <div
        className="col-sm-2"
        style={{
          margin: 'auto'
        }}
      >
        <h1>
          <Link to="/">FluxStore</Link>
        </h1>
      </div>
      <div className="col-sm-10 text-right">
        <CartSummary />
      </div>
    </div>
  );
};

export default Header;
