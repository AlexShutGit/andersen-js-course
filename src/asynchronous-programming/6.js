/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
const task6 = () => {
  getResolvedPromise(500)
    .then(value => {
      if (value > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(Error => console.log(Error))
    .finally(console.log('This is Finally'));
};

const getResolvedPromise = value => new Promise(result => result(value));

export { task6 };
