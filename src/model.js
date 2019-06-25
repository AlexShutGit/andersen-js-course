/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { checkRecipes } from './helpers';

class Model {
  constructor() {
    this.state = {
      recipes: {},
      items: {},
    };
    this.recipes = this.state.recipes;
    this.items = this.state.items;
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  getItem(id) {
    return this.items[id];
  }

  addRecipe({ id, name, recipe }) {
    const result = Object.keys(this.recipes).some(item => {
      return this.recipes[item].name === name;
    });
    if (!result) {
      this.recipes[id] = {};
      this.recipes[id].id = id;
      this.recipes[id].name = name;
      this.recipes[id].recipe = recipe;
      return this.getRecipe(id);
    }
    return false;
  }

  getElementsRecipe(id) {
    // eslint-disable-next-line prefer-destructuring
    const recipe = this.getRecipe(id).recipe;
    return recipe;
  }

  addItem({ id, name }) {
    const result = Object.keys(this.items).some(item => {
      return this.items[item].name === name;
    });
    if (!result) {
      this.items[id] = {};
      this.items[id].id = id;
      this.items[id].name = name;
      return this.getItem(id);
    }
    return this.getItem(id);
  }

  getIdForNewRecipe() {
    return Object.keys(this.recipes).length;
  }

  getIdForNewItem() {
    return Object.keys(this.items).length;
  }

  checkCragtingTable(elem) {
    // eslint-disable-next-line func-names
    const objRecipe = Object.keys(this.recipes).find(item => {
      if (checkRecipes(elem, this.recipes[item].recipe)) return true;
    });
    if (objRecipe !== undefined) {
      return this.recipes[objRecipe].name;
    }
    return false;
  }
}

export default Model;
