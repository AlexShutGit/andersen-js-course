/* eslint-disable import/prefer-default-export */
import { asyncGetFromSite } from '../asyncDataSite';

async function asyncTask5() {
  const first = () => asyncGetFromSite('http://www.json-generator.com/api/json/get/cevhxOsZnS');
  const second = () => asyncGetFromSite('http://www.json-generator.com/api/json/get/cguaPsRxAi');
  const third = () => asyncGetFromSite('http://www.json-generator.com/api/json/get/cfDZdmxnDm');
  const fourth = () => asyncGetFromSite('http://www.json-generator.com/api/json/get/cfkrfOjrfS');
  const fifth = () => asyncGetFromSite('http://www.json-generator.com/api/json/get/ceQMMKpidK');
  async function parallel() {
    const promises = [await first(), await second(), await third(), await fourth(), await fifth()];
    const [one, two, three, four, five] = await Promise.all(promises);
    console.log([one, two, three, four, five]);
  }
  async function sequence() {
    const one = await first();
    const two = await second();
    const three = await third();
    const four = await fourth();
    const five = await fifth();
    const all = [one, two, three, four, five];
    console.log(all);
  }
  parallel();
  sequence();
}
export { asyncTask5 };
