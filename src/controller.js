/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { request } from './requests';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addTodo.bind(this));
    view.on('toggle', this.toggleTodo.bind(this));
    view.on('edit', this.editTodo.bind(this));
    view.on('remove', this.removeTodo.bind(this));

    view.show(model.items);
  }

  // Добавление задачи
  addTodo(title) {
    const item = { name: title, complete: false };
    const targetUrl = 'http://localhost:3000/todo';
    fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(result => {
        const kek = this.model.addItem(result);
        this.view.addItem(kek);
      });
  }

  // Изменение статуса задачи
  toggleTodo({ id, name, complete }) {
    const item = { name, complete };
    request(id, item, 'PUT');
    const itemModel = this.model.updateItem(id, { complete });
    this.view.toggleItem(itemModel);
  }

  // Изменение имени задачи
  editTodo({ id, name, complete }) {
    const item = { name, complete };
    request(id, item, 'PUT');
    const itemModel = this.model.updateItem(id, { name });
    this.view.editItem(itemModel);
  }

  // Удаление задачи
  removeTodo(id) {
    const targetUrl = `http://localhost:3000/todo/${id}`;
    fetch(targetUrl, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    this.model.removeItem(id);
    this.view.removeItem(id);
  }
}

export default Controller;
