import React, { Component } from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const cartItems = () => {
  return { items: AppStore.getCart() };
};

const Cart = props => {
  let total = 0;
  let cartItems = props.items.map((item, i) => {
    let subtotal = item.qty * item.cost;
    total += subtotal;
    return <CartItem key={i} item={item} subtotal={subtotal} />;
  });
  return (
    <div>
      <h1>Cart</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th />
            <th>Item</th>
            <th>Qty</th>
            <th />
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-rigth">
              Total
            </td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
      <Link to="/" className="btn btn-default btn-sm">
        Continue shopping
      </Link>
    </div>
  );
};

export default StoreWatchMixin(Cart, cartItems);
