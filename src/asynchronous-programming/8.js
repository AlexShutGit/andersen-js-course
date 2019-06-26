/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

const task8 = () => {
  async function getUsers(url) {
    const response = await fetch(url);
    return response;
  }

  async function foo(url) {
    try {
      const response = await getUsers(url);
      const [users] = await response.json();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }

  foo('https://jsonplaceholder.typicode.com/users');
  foo('ht://jsonplaceholder.typicode.com/users');
};
export { task8 };
