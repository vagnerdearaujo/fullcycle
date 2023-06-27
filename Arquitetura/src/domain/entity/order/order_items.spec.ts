import OrderItem from "./order_items";

describe("Teste OrderItem",() => {
    it("Id do Item não pode ser vazio",()=> {
        expect(()=>{
            let item = new OrderItem("","prod1","item1",10,1);
        }).toThrowError("Id do Item não pode estar em branco");
    });

    it("Id do produto não pode ser vazio",()=> {
        expect(()=>{
            let item = new OrderItem("Id","","item1",10,1);
        }).toThrowError("Id do produto não pode estar em branco");
    });

    it("Nome do item não pode ser vazio",()=>{
       expect(()=>{
            let item = new OrderItem("id1","Prod1","",10,1);
       }).toThrowError("Nome do Item não pode estar em branco"); 
    });

    it("Preço não pode ser zero",()=>{
        expect(()=>{
            let item = new OrderItem("id1","prod1","item1",0,1);; 
        }).toThrowError("Preço do Item deve ser maior que zero");
    });

    it("Quantidade não pode ser zero",()=>{
        expect(()=>{
            let item = new OrderItem("id1","prod1","item1",1,0);
        }).toThrowError("Quantidade do Item deve ser maior que zero");
    })
});
