import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers';

const CartSummary = props => {
  return (
    <div style={{ padding: '15px', paddingRight: 0 }}>
      <Link to="/cart">
        <button className="btn btn-basic" style={{ backgroundColor: 'pink' }}>
          {`Cart Items: ${props.qty} / ${props.total &&
            formatPrice(props.total)}`}
        </button>
      </Link>
    </div>
  );
};

export default StoreWatchMixin(CartSummary, AppStore.getCartTotals);
