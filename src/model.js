/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
import { EventEmitter } from './helpers';

class Model extends EventEmitter {
  constructor(items = []) {
    super();

    this.items = items;
  }

  getItem(id) {
    console.log(this.items);
    return this.items.find(item => item._id == id);
  }

  addItem(item) {
    this.items.push(item);
    this.emit('change', this.items);
    return item;
  }

  updateItem(id, data) {
    const item = this.getItem(id);
    console.log(data);
    console.log(item);
    Object.keys(data).forEach(prop => (item[prop] = data[prop]));

    this.emit('change', this.items);

    return item;
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.id == id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.emit('change', this.items);
    }
  }
}

export default Model;
