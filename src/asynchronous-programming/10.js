/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

const task10 = () => {
  class Musician {
    constructor(albumUrl) {
      this.albums = albumUrl;
    }

    async getAlbums() {
      const response = await fetch(this.albums);
      const albums = await response.json();
      return albums;
    }
  }
  const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
  musician.getAlbums().then(albums => console.log(albums));
};
export { task10 };
