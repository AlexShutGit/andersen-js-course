/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { EventEmitter, onCraftTable, hangDrage, hangDrop, createElement } from './helpers';

class View extends EventEmitter {
  constructor() {
    super();

    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.recipeInfo = document.getElementById('recipe-info');
    this.itemList = document.getElementById('items-list');
    this.recipeList = document.getElementById('recipes-list');
    this.itemButton = document.getElementById('add-button');
    this.craftTable = document.getElementById('craft-table');
    this.createRecipe = document.getElementById('create-recipe');
    this.createItem = document.getElementById('create-item');
    this.createItemRecipe = document.getElementById('create-item-recipe');
    this.createRecipe.addEventListener('click', this.handleCreateRecipe.bind(this));
    this.createItem.addEventListener('click', this.handleCreateItem.bind(this));
    this.createItemRecipe.addEventListener('click', this.handleFollowTable.bind(this));
    this.borders = document.querySelectorAll('el.bord');
    hangDrage(this.itemList);
    hangDrop('bord', this.craftTable);
    hangDrop('recipeBord', this.craftTable);
    hangDrop('items-list', this.form);
  }

  addNewRecipe(element) {
    const newRecipe = createElement(element);
    this.recipeList.appendChild(newRecipe);
    newRecipe.addEventListener('click', this.handleShowRecipe.bind(this));
  }

  addNewItemToList(element) {
    const newItem = createElement(element);
    this.itemList.appendChild(newItem);
  }

  createNewItem(element) {
    if (element) {
      const newItem = createElement(element);
      this.itemList.appendChild(newItem);
    }
  }

  handleFollowTable() {
    const elements = onCraftTable(this.borders);
    this.emit('ON_THE_CRAFT_TABLE', elements);
  }

  showRecipe(recipe) {
    const text = recipe.reduce((accum, item) => {
      return (accum += `${document.getElementById(item).innerText}, `);
    }, 'Для реализации этого рецепта вам нужны предметы ');
    this.recipeInfo.innerText = text;
  }

  handleCreateRecipe() {
    if (this.input.value === '') {
      return alert('Введите название рецепта');
    }
    const recipe = onCraftTable(this.borders);
    if (recipe.length > 0) {
      this.emit('CREATE_RECIPE', {
        name: this.input.value,
        recipe,
      });
    } else return alert('Нет предметов на столе');
  }

  handleCreateItem() {
    if (this.input.value === '') alert('Введите название предмета');
    this.emit('CREATE_ITEM', {
      name: this.input.value,
    });
  }

  handleShowRecipe(evt) {
    const idRecipe = evt.target.getAttribute('id');
    this.emit('GET_ELEMENTS_RECIPE', idRecipe);
  }
}

export default View;
