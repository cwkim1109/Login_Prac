"use strict"

class UserStorage {
  static #users = {
    id: ["Bobby", "Sally", "Corn"],
    pwd: ["1234", "1234", "1234"],
    names: ["바비킴", "샐리퐉", "콘팝"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
