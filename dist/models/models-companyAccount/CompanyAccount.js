"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAccount = void 0;
const DioAccounts_1 = require("../DioAccounts");
class CompanyAccount extends DioAccounts_1.DioAccounts {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.getLoan = () => {
            console.log(`Empréstimo realizado com sucesso!`);
        };
    }
}
exports.CompanyAccount = CompanyAccount;
