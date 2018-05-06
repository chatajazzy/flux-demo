import React from 'react';
import { formatPrice } from '../../helpers';

const CartTable = props => {
  return (
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
      <tbody>{props.cartItems}</tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="text-right">
            <strong>Total</strong>
          </td>
          <td>
            <strong>{props.total && formatPrice(props.total)}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartTable;
