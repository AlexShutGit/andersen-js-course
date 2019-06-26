/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

async function asyncGetFromSite(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export { asyncGetFromSite };
