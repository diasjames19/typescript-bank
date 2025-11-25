"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PeopleAccount_1 = require("./models/models-peopleAccount/PeopleAccount");
const peopleAccount1 = new PeopleAccount_1.PeopleAccount("João", 1, 12345678900);
console.log(peopleAccount1.deposit(0));
