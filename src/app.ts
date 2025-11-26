import { PeopleAccount } from "./models/models-peopleAccount/PeopleAccount";
import { CompanyAccount } from "./models/models-companyAccount/CompanyAccount";
import { VipAccount } from "./models/models-vipAccount/VipAccount";


const peopleAccount1 = new PeopleAccount("João", 1, 12345678900);
console.log(peopleAccount1.deposit(10));


const companyAccount1 = new CompanyAccount("Empresa X", 2,true);
console.log(companyAccount1.deposit(1000));
console.log(companyAccount1.getLoan(1000));

const vipAccount1 = new VipAccount("Maria", 3,true);
console.log(vipAccount1.deposit(1000));

const companyAccount2 = new CompanyAccount("Empresa X", 2,false);
console.log(companyAccount2.deposit(1000));
console.log(companyAccount2.getLoan(1000));










