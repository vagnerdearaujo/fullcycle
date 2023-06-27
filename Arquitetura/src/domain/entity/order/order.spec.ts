import Order from "./order";
import OrderItem from "./order_items";

describe("Testes Order",() => {
    it("Id da Ordem não pode ser branco",()=> {
        expect(()=> {
            let order = new Order("","Cust 1",[]);
        }).toThrowError("Id da ordem não pode estar vazio");
    });

    it("Customer Id não pode ser branco",() => {
        expect(()=>{
            let order = new Order("Ord1","",[]); 
        }).toThrowError("CustomerId não pode estar vazio");
    });

    it("Ordem deve ter itens",()=>{
        expect(()=>{
            let order = new Order("Ord1","cust 1",[]);  
        }).toThrowError("Ordem deve conter itens");
    });

    //Cria as variáveis que serão utilizadas nos testes finais
    //O lado negativo desta abordagem é não ser possível rodar os dois últimos testes de forma individual.
    let items = [];
    let order : Order;

    it("Ordem criada com sucesso",()=>{
        items = [new OrderItem("id1","prod1","name1",1,2),new OrderItem("id2","prod1","name2",2,2)];
        order = new Order("Ord1","cust 1",items);
        expect(order.id).toBe("Ord1");
    });

    it("Valida Total",()=>{
        expect(order.total()).toBe(6);
    });
});
