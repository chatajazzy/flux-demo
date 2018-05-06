import React, { Component } from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CartItem from './CartItem';
import CartTable from './CartTable';
import { Link } from 'react-router-dom';

const cartItems = () => {
  return { items: AppStore.getCart() };
};
const emptyCart = (
  <p>
    Your cart is currently empty. You can change it by going to
    <Link to="/" style={{ marginLeft: '5px' }}>
      catalog.
    </Link>
  </p>
);

const Cart = props => {
  let total = 0;
  let cartItems = props.items.map((item, i) => {
    let subtotal = item.qty * item.cost;
    total += subtotal;
    return <CartItem key={i} item={item} subtotal={subtotal} />;
  });
  return (
    <div style={{ paddingTop: '25px' }}>
      <h1 style={{ marginBottom: '25px' }}>Cart</h1>
      {total ? (
        <div>
          <CartTable cartItems={cartItems} total={total} />
          <Link to="/" className="btn btn-default btn-sm">
            Continue shopping
          </Link>
        </div>
      ) : (
        emptyCart
      )}
    </div>
  );
};

export default StoreWatchMixin(Cart, cartItems);
