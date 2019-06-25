/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type, arg) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(arg));
    }
  }
}

const onCraftTable = bords => {
  return Array.from(bords)
    .map(item => {
      if (item.firstElementChild) {
        return item.firstElementChild.getAttribute('id');
      }
    })
    .filter(item => {
      return item !== undefined;
    });
};

const hangDrage = (list, cb = undefined) => {
  Array.from(list.children).forEach(item => {
    if (item.getAttribute('id')) {
      item.addEventListener('dragstart', evt => {
        evt.dataTransfer.setData('text', item.getAttribute('id'));
        if (cb) {
          cb();
        }
      });
    }
  });
};

const hangDrop = (id, block = undefined, cb = undefined) => {
  if (block !== undefined) {
    Array.from(block.children).forEach(item => {
      if (item.getAttribute('id') === id) {
        item.addEventListener('dragover', ev => {
          ev.preventDefault();
        });
        item.addEventListener('drop', evt => {
          evt.preventDefault();
          const data = evt.dataTransfer.getData('text');
          evt.target.appendChild(document.getElementById(data));
          if (cb) {
            cb();
          }
        });
      }
    });
  } else {
    const element = document.getElementById(id);
    element.addEventListener('dragover', ev => {
      ev.preventDefault();
    });
    element.addEventListener('drop', evt => {
      evt.preventDefault();
      const data = evt.dataTransfer.getData('text');
      console.log(`${data} ${evt.target}`);
      evt.target.appendChild(document.getElementById(data));
    });
  }
};

const checkRecipes = (arrA, arrB) => {
  const diffA = arrA.sort();
  const diffB = arrB.sort();
  if (diffA === diffB) return true;
  if (diffA.length !== diffB.length) return false;
  for (let i = 0; i < diffA.length; ++i) {
    if (diffA[i] !== diffB[i]) return false;
  }
  return true;
};

const createElement = ({ id, name, recipe }) => {
  const element = document.createElement('el');
  element.innerText = name;
  if (recipe !== undefined && id !== undefined) {
    element.setAttribute('class', 'recipe');
    element.setAttribute('draggable', 'true');
    element.setAttribute('id', id);
    element.addEventListener('dragstart', evt => {
      evt.dataTransfer.setData('text', element.getAttribute('id'));
    });
    return element;
  }
  if (id !== undefined) {
    element.setAttribute('class', 'item');
    element.setAttribute('draggable', 'true');
    element.setAttribute('id', id);

    element.addEventListener('dragstart', evt => {
      evt.dataTransfer.setData('text', element.getAttribute('id'));
    });
    return element;
  }
  element.setAttribute('class', 'item');
  element.setAttribute('draggable', 'true');
  return element;
};

export { createElement, EventEmitter, checkRecipes, hangDrage, hangDrop, onCraftTable };
