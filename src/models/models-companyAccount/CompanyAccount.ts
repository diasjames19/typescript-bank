import { DioAccounts } from "../DioAccounts";

export class CompanyAccount extends DioAccounts {

    statusConta:boolean = true;
    constructor(name:string,accountNumber:number,statusConta:boolean){
        super(name,accountNumber);
        this.statusConta = statusConta;
         
    }

    /*
        Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
        Apenas contas com o status true podem fazer empréstimo
    */

    getLoan=(loan:number):number=>{
        let saldoAtual = this.deposit(1000);
       if(!this.getvalidateStatus()){
            throw new Error("Conta inválida!");
        }else{
            if(loan>0){
            this.balance = saldoAtual + loan;
             console.log("Empréstimo realizado com sucesso!");
        }
            return this.balance;
        }
        
        
    }
     getvalidateStatus=():boolean=>{
        try {
            return this.statusConta;
        } catch (error) {
            throw new Error("Conta inválida!");
        }
    }   
}