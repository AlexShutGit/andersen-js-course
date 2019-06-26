/* eslint-disable import/prefer-default-export */
import asyncGetFromSite from '../asyncDataSite';

async function asyncTask4() {
  const usersData = await asyncGetFromSite('http://www.json-generator.com/api/json/get/cfQCylRjuG');
  if (usersData) {
    const usersDataAll = await asyncGetFromSite(
      'http://www.json-generator.com/api/json/get/cfVGucaXPC'
    );
    console.log(usersDataAll);
  }
}

export { asyncTask4 };
