/* eslint-disable import/prefer-default-export */
const task9 = () => {
  const asyncBar = async () => 'Some string';

  async function foo() {
    const somesrt = await asyncBar();
    console.log(somesrt);
  }
  foo();
};

export { task9 };
