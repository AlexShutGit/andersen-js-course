/* eslint-disable no-alert */
import { EventEmitter } from './helpers';

class Controller extends EventEmitter {
  constructor(model, view) {
    super();
    this.model = model;
    this.view = view;

    view.on('CREATE_RECIPE', this.addNewRecipe.bind(this));
    view.on('GET_ELEMENTS_RECIPE', this.getElementsRecipe.bind(this));
    view.on('ON_THE_CRAFT_TABLE', this.checkOurTable.bind(this));
    view.on('CREATE_ITEM', this.addNewItem.bind(this));
  }

  addNewRecipe({ name, recipe }) {
    const element = this.model.addRecipe({
      id: `recipe${this.model.getIdForNewRecipe() + 1}`,
      name,
      recipe,
    });
    if (element) {
      this.view.addNewRecipe(element);
    } else {
      alert('Такой рецепт уже есть');
    }
  }

  addNewItem({ name }) {
    const element = this.model.addItem({
      id: `item${this.model.getIdForNewItem() + 1}`,
      name,
    });
    this.view.addNewItemToList(element);
  }

  getElementsRecipe(id) {
    const recipe = this.model.getElementsRecipe(id);
    this.view.showRecipe(recipe);
  }

  checkOurTable(elements) {
    const result = this.model.checkCragtingTable(elements);
    alert('Не хватает предметов на столе для какого-либо рецептаили такой рецепт уже реализован');
    if (result) {
      const element = this.model.addItem({
        id: `item${this.model.getIdForNewItem() + 1}`,
        name: result,
      });
      this.view.createNewItem(element);
    }
  }
}

export default Controller;
