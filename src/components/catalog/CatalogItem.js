import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/CartButton';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../helpers';

const CatalogItem = props => {
  let itemStyle = {
    borderBottom: '1px solid #ccc',
    paddingTop: '25px',
    paddingBottom: '25px'
  };
  return (
    <div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
      <h4>{props.item.title}</h4>
      <img
        src="http://placehold.it/250x250"
        width="100%"
        className="img-responsive"
        style={{ margin: '10px 0' }}
      />
      <p>{props.item.summary}</p>
      <p>
        <strong>{formatPrice(props.item.cost)}</strong>
        <span className="text-success">
          {props.item.qty && ` (${props.item.qty}) in cart `}
        </span>
      </p>
      <div className="btn-group">
        <Link to={`/item/${props.item.id}`} style={{ marginRight: '10px' }}>
          <button className="btn btn-default btn-sm">More</button>
        </Link>

        <CartButton
          handler={AppActions.addItem.bind(null, props.item)}
          txt="Add to cart"
          backgroundColor="pink"
        />
      </div>
    </div>
  );
};

export default CatalogItem;
