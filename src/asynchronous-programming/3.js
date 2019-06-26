/* eslint-disable import/prefer-default-export */
const task3 = () => {
  const delay = ms => {
    return new Promise(resolve => {
      setTimeout(() => resolve(100), ms);
    });
  };
  delay(1000).then(value => console.log(`Done with ${value}`));
};
export { task3 };
