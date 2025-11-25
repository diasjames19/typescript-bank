export abstract class DioAccounts {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0
    private status: boolean = true;
    
    constructor(name: string, accountNumber: number ){
        this.name = name
        this.accountNumber = accountNumber;
    }

    setName=(name:string):void=>{
         this.name = name;
         console.log("Atualizado com sucesso!");
    }

    getName=():string=>{
        return`O nome do titular da conta é: ${this.name}`;
    }
    /* 
        Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
        Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
    */
    deposit=(qtd:number):number=>{
        if(!this.validateStatus()){
            throw new Error("Conta inválida!");
        }
        if(qtd>0){
            this.balance += qtd;
            return this.balance;
        }else{
            throw new Error("Depósito inválido!");
        }
    }
    withdraw=(qtd:number):number=>{
        if(this.balance > 0){
            this.balance -= qtd;
            console.log("Saque realizado com sucesso!"); 
        }else{
            throw new Error("Saldo insuficiente!");
        }
           return this.balance;
    }

    getBalance=():void=>{
        console.log(`O saldo da conta é de: R$${this.balance}`); 
        
    }

    private validateStatus=():boolean=>{
        try {
            return this.status;
        } catch (error) {
            throw new Error("Conta inválida!");
        }
    }   
}