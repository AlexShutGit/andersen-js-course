/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { EventEmitter, createElement } from './helpers';

class View extends EventEmitter {
  constructor() {
    super();

    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.list = document.getElementById('todo-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  createListItem(todo) {
    const checkbox = createElement('input', {
      type: 'checkbox',
      className: 'checkbox',
      checked: todo.complete ? 'checked' : '',
    });
    const label = createElement('label', { className: 'title' }, todo.name);
    const editInput = createElement('input', { type: 'text', className: 'textfield' });
    const editButton = createElement('button', { className: 'edit' }, 'Изменить');
    const deleteButton = createElement('button', { className: 'remove' }, 'Удалить');
    const item = createElement(
      'li',
      { className: `todo-item${todo.complete ? ' complete' : ''}`, 'data-id': todo._id },
      checkbox,
      label,
      editInput,
      editButton,
      deleteButton
    );

    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const checkbox = item.querySelector('.checkbox');
    const editButton = item.querySelector('button.edit');
    const removeButton = item.querySelector('button.remove');

    checkbox.addEventListener('change', this.handleToggle.bind(this));
    editButton.addEventListener('click', this.handleEdit.bind(this));
    removeButton.addEventListener('click', this.handleRemove.bind(this));

    return item;
  }

  findListItem(id) {
    return this.list.querySelector(`[data-id="${id}"]`);
  }

  handleAdd(event) {
    event.preventDefault();
    if (!this.input.value) return alert('Необходимо ввести название задачи.');

    const value = this.input.value;

    this.emit('add', value);
  }

  handleToggle({ target }) {
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const complete = target.checked;
    const elementName = listItem.querySelector('.title');
    const name = elementName.innerHTML;
    this.emit('toggle', { id, name, complete });
  }

  handleEdit({ target }) {
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('.textfield');
    const editButton = listItem.querySelector('button.edit');
    const name = input.value;
    const isEditing = listItem.classList.contains('editing');
    const complete = listItem.querySelector('.checkbox');
    if (isEditing) {
      this.emit('edit', { id, name, complete });
    } else {
      input.value = label.textContent;
      editButton.textContent = 'Сохранить';
      listItem.classList.add('editing');
    }
  }

  handleRemove({ target }) {
    const listItem = target.parentNode;

    this.emit('remove', listItem.getAttribute('data-id'));
  }

  show(todos) {
    todos.forEach(todo => {
      const listItem = this.createListItem(todo);

      this.list.appendChild(listItem);
    });
  }

  addItem(todo) {
    const listItem = this.createListItem(todo);

    this.input.value = '';
    this.list.appendChild(listItem);
  }

  toggleItem(todo) {
    const listItem = this.findListItem(todo._id);
    const checkbox = listItem.querySelector('.checkbox');
    checkbox.checked = todo.complete;

    if (todo.complete) {
      listItem.classList.add('complete');
    } else {
      listItem.classList.remove('complete');
    }
  }

  editItem(todo) {
    const listItem = this.findListItem(todo._id);
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('.textfield');
    const editButton = listItem.querySelector('button.edit');

    label.textContent = todo.name;
    editButton.textContent = 'Изменить';
    listItem.classList.remove('editing');
  }

  removeItem(id) {
    const listItem = this.findListItem(id);

    this.list.removeChild(listItem);
  }
}

export default View;
