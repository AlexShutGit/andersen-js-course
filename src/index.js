/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import Model from './model';
import View from './view';
import Controller from './controller';

// Создание MVC
async function createMVC(state) {
  const model = new Model(state || undefined);
  const view = new View();
  const controller = new Controller(model, view);
}

// Создание состояния для MVC
createState();
async function createState() {
  const state = await getState();
  await createMVC(state);
}

// Получение всех задач
async function getState() {
  const targetUrl = 'http://localhost:3000/todo';
  const check = await fetch(targetUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await check.json();
  return data;
}
