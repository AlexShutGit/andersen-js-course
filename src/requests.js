/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
const request = (id, item, type) => {
  switch (type) {
    case 'PUT':
      fetch(`http://localhost:3000/todo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      break;
    case 'DELETE':
      fetch(`http://localhost:3000/todo/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
      break;
    default:
      break;
  }
};
export { request };
