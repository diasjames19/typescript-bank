import { DioAccounts } from "../DioAccounts"; 


/* [ ] Criar um novo tipo de conta a partir da DioAccount

Esta conta não deve receber novos atributos
Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
*/
export class VipAccount extends DioAccounts {
    
    constructor(name:string, accountNumber:number,status:boolean){
        super(name,accountNumber)
        
        
    }

   deposit=(qtd:number):number=>{
        if(!this.getStatus){
            throw new Error("Conta inválida!");
        }else{
            if(qtd>0){
                this.balance += qtd;
                console.log("Depósito realizado com sucesso!\nConta Vip tem bônus de R$10,00 a cada deposito!");
                return this.balance + 10;
            }else{
                throw new Error("Depósito inválido!");
            }
        }
        
    }
}