import React, { Component } from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CatalogItem from './CatalogItem';

function getCatalog() {
  return { items: AppStore.getCatalog() };
}

const Catalog = props => {
  let items = props.items.map(item => {
    return <CatalogItem key={item.id} item={item} />;
  });
  return <div className="row">{items}</div>;
};

export default StoreWatchMixin(Catalog, getCatalog);
