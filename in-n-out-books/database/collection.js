/**
 * Author: Maxine Casillas
 * Date: 06/29/2026
 * File: collection.js
 * Description: Simple mock collection class for querying local JavaScript data.
 */

class Collection {
  constructor(data) {
    this.data = data;
  }

  find() {
    return this.data;
  }

  findOne(query) {
    return this.data.find((item) => {
      return Object.keys(query).every((key) => item[key] === query[key]);
    });
  }
}

module.exports = Collection;
