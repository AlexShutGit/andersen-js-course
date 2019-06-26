/* eslint-disable import/prefer-default-export */
import { getFromSite } from '../dataSite';

async function task5() {
  const urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK',
  ];

  const parallel = () => {
    Promise.all(urls.map(getFromSite)).then(element => {
      console.log('parralel');
      console.log(element);
    });
  };

  const sequence = () => {
    const result = urls.reduce((accum, next) => {
      return accum.then(coupling => getFromSite(next).then(element => [...coupling, element]));
    }, Promise.resolve([]));

    result.then(element => {
      console.log('sequence');
      console.log(element);
    });
  };
  parallel();
  sequence();
}
export { task5 };
