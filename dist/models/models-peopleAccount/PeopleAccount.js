"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleAccount = void 0;
const DioAccounts_1 = require("../DioAccounts");
class PeopleAccount extends DioAccounts_1.DioAccounts {
    constructor(name, accountNumber, doc_id) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}
exports.PeopleAccount = PeopleAccount;
