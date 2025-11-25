"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccounts = void 0;
class DioAccounts {
    constructor(name, accountNumber) {
        this.balance = 0;
        this.status = true;
        this.setName = (name) => {
            this.name = name;
            console.log("Atualizado com sucesso!");
        };
        this.getName = () => {
            return `O nome do titular da conta é: ${this.name}`;
        };
        this.deposit = (qtd) => {
            if (!this.validateStatus()) {
                throw new Error("Conta inválida!");
            }
            if (qtd > 0) {
                this.balance += qtd;
                return this.balance;
            }
            else {
                throw new Error("Depósito inválido!");
            }
        };
        this.withdraw = () => {
            console.log("Saque realizado com sucesso!");
        };
        this.getBalance = () => {
            console.log(`O saldo da conta é de: R$${this.balance}`);
        };
        this.validateStatus = () => {
            try {
                return this.status;
            }
            catch (error) {
                throw new Error("Conta inválida!");
            }
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
exports.DioAccounts = DioAccounts;
