import { DioAccounts } from "../DioAccounts";

export class CompanyAccount extends DioAccounts {

    
    constructor(name:string,accountNumber:number,status:boolean){
        super(name,accountNumber);
        
         
    }

    /*
        Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
        Apenas contas com o status true podem fazer empréstimo
    */

    getLoan=(loan:number):number=>{
        let saldoAtual = this.deposit(1000);
       if(!this.getStatus){
            throw new Error("Conta inválida!");
        }else{
            if(loan>0){
            this.balance = saldoAtual + loan;
             console.log("Empréstimo realizado com sucesso!");
        }
            return this.balance;
        }
        
        
    }
    
}