import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from './CartButton';
import { formatPrice } from '../../helpers';

const CartItem = props => {
  return (
    <tr>
      <td>
        <CartButton
          txt="x"
          handler={AppActions.removeItem.bind(null, props.item)}
        />
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.qty}</td>
      <td>
        <div className="btn-group">
          <CartButton
            txt="-"
            handler={AppActions.decreaseItem.bind(null, props.item)}
          />

          <CartButton
            txt="+"
            handler={AppActions.increaseItem.bind(null, props.item)}
          />
        </div>
      </td>
      <td>{formatPrice(props.subtotal)}</td>
    </tr>
  );
};

export default CartItem;
