import { getFunName } from '../helpers';

const CartAPI = {
  catalog: [],
  cartItems: [],
  removeItem(item) {
    this.cartItems.splice(this.cartItems.findIndex(i => i === item), 1);
  },
  findCartItem(item) {
    return this.cartItems.find(cartItem => cartItem.id === item.id);
  },

  increaseItem(item) {
    item.qty++;
  },
  decreaseItem(item) {
    item.qty--;
    if (item.qty === 0) {
      this.removeItem(item);
    }
  },
  addItem(item) {
    const cartItem = this.findCartItem(item);
    if (!cartItem) {
      this.cartItems.push(Object.assign({ qty: 1 }, item));
    } else {
      this.increaseItem(cartItem);
    }
  },
  cartTotals(qty = 0, total = 0) {
    this.cartItems.forEach(cartItem => {
      qty += cartItem.qty;
      total += cartItem.qty * cartItem.cost;
    });
    return { qty, total };
  },
  getCatalog() {
    return this.catalog.map(item => {
      return Object.assign(
        {},
        item,
        this.cartItems.find(cItem => cItem.id === item.id)
      );
    });
  },
  init() {
    console.log('initing');
    for (let i = 1; i < 9; i++) {
      let name = getFunName();
      this.catalog.push({
        id: name + i,
        title: name,
        summary: 'A great widget called' + name,
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quod officiis laudantium sapiente voluptas placeat omnis, quam adipisci ex libero saepe pariatur consequuntur hic numquam atque harum dolorem sint sunt.',
        cost: Math.floor(Math.random() * 1000)
      });
    }
  }
};

CartAPI.init();
export default CartAPI;
