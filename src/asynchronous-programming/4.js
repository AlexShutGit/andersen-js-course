/* eslint-disable import/prefer-default-export */
import { getFromSite } from '../dataSite';

const task4 = () => {
  getFromSite('http://www.json-generator.com/api/json/get/cfQCylRjuG').then(data => {
    const { getUsersData } = data;
    if (getUsersData) {
      getFromSite('http://www.json-generator.com/api/json/get/cfVGucaXPC').then(result =>
        console.log(result)
      );
    }
  });
};

export { task4 };
