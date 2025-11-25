import { PeopleAccount } from "./models/models-peopleAccount/PeopleAccount";
import { CompanyAccount } from "./models/models-companyAccount/CompanyAccount";


const peopleAccount1 = new PeopleAccount("João", 1, 12345678900);
const companyAccount1 = new CompanyAccount("Empresa X", 2,false);
const companyAccount2 = new CompanyAccount("Empresa X", 2,false);
console.log(peopleAccount1.deposit(10));
console.log(companyAccount1.deposit(1000));
console.log(companyAccount1.getLoan(1000));
//console.log(companyAccount2.getvalidateStatus);
//console.log(companyAccount2.deposit(1000));
//console.log(companyAccount2.getLoan(1000));