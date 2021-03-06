import { dispatch, register } from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import CartAPI from '../api/CartAPI';
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change';

const AppStore = Object.assign(EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart() {
    return CartAPI.cartItems;
  },

  getCatalog() {
    return CartAPI.getCatalog();
  },
  getCartTotals() {
    return CartAPI.cartTotals();
  },
  dispatcherIndex: register(function(action) {
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
        CartAPI.addItem(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        CartAPI.removeItem(action.item);
        break;
      case AppConstants.INCREASE_ITEM:
        CartAPI.increaseItem(action.item);
        break;
      case AppConstants.DECREASE_ITEM:
        CartAPI.decreaseItem(action.item);
        break;
    }

    AppStore.emit(CHANGE_EVENT);
  })
});

export default AppStore;
