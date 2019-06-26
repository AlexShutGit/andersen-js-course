/* eslint-disable import/prefer-default-export */
const task2 = () => {
  const successCb = result => {
    console.log('Success parse!');
    console.log(result);
  };

  const failureCb = error => {
    console.log('Failure parse');
    console.log(error);
  };

  const parseJSON = (jsonStr, sucCb, failCb) => {
    try {
      const result = JSON.parse(jsonStr);
      sucCb(result);
    } catch (error) {
      failCb(error);
    }
  };

  parseJSON('{"x": 10}', successCb, failureCb);
  parseJSON('{x}', successCb, failureCb);
};
export { task2 };
