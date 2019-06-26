/* eslint-disable import/prefer-default-export */
const task1 = () => {
  const foo = (x, cb) => {
    if (x > 10) {
      console.log(`x > 10`);
      cb();
    } else if (x <= 10) {
      console.log('x <= 10');
    }
  };

  const createCb = str => () => console.log(str);

  foo(5, createCb('cb'));
  foo(20, createCb('cb'));
};

export { task1 };
