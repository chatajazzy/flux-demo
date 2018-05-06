import React from 'react';

const CartButton = props => {
  return (
    <button className="btn btn-default btn-sm" onClick={props.handler}>
      {props.txt}
    </button>
  );
};

export default CartButton;
