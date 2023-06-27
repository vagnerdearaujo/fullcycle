import Address from "../valueobjects/address";
import Customer from "./customer";

describe("Testes customer",()=>{
    it("Id do customer não pode estar em branco",()=>{
        expect(() => {
            let customer = new Customer("","cli 1");
        }).toThrowError("Id do Consumidor não pode estar em branco"); 
    });


    it ("Nome cliente não pode ser bramco",() => {
        expect(() => {
            let customer = new Customer("Id 1","");
        }).toThrowError("Nome do Consumidor não pode estar em branco");
    });

    it ("Erro ao mudar Nome cliente para bramco",() => {
        expect(() => {
            let customer = new Customer("Id 1","Cli 1");
            customer.changeName("");
        }).toThrowError("Nome do Consumidor não pode estar em branco");
    });

    it ("Para ativar precisa de endereço",()=>{
        expect(() => {
            let customer = new Customer("Id 1","cli 1");
            customer.activate();
        }).toThrowError("Impossível ativar cliente com endereço em branco"); 
    });

    it ("Clente desativado após ativado", ()=> {
        let customer = new Customer("Id 1","cli 1");
        let address = new Address("Rua X", 10,"0000-000","São Paulo");
        customer.address = address;
        customer.activate();
        customer.deactivate()
        expect(customer.active).toBe(false);
    });

    it ("Clente criado com sucesso", ()=> {
        let customer = new Customer("Id 1","cli 1");
        let address = new Address("Rua X", 10,"0000-000","São Paulo");
        customer.address = address;
        customer.activate();
        expect(customer.active).toBe(true);
    });
});

describe("Testes Address",() => {
    it ("Rua não pode estar em branco",() => {
        expect(() => {
            let address = new Address("", 10,"0000-000","São Paulo");
        }).toThrowError("A rua não pode estar em branco");
    });

    it ("Número não pode ser zero",() => {
        expect(() => {
            let address = new Address("Rua X", 0,"0000-000","São Paulo");

        }).toThrowError("O número não pode estar em branco");
    });

    it ("Cep não pode ser branco",() => {
        expect(() => {
            let address = new Address("Rua X", 10,"","São Paulo");
        }).toThrowError("O CEP não pode estar em branco");
    });

    it ("Cidade não pode ser branco",() => {
        expect(() => {
            let address = new Address("Rua X", 10,"0000-000","");
        }).toThrowError("A cidade não pode estar em branco");
    });
});