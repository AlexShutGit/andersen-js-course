/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

const getFromSite = url => fetch(url).then(response => response.json());

export { getFromSite };
