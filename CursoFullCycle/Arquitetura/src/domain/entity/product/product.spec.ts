import Product from "./product";

describe("Testes Product",()=>{
    it("Id do produto não pode estar vazio",()=>{
        expect(()=>{
            let produto = new Product("","prod1",1);
        }).toThrowError("Id do Produto não pode estar em branco");
    });

    it ("Nome do produto não pode ser vazio",()=>{
        expect(()=>{
            let produto = new Product("Id1","",1);

        }).toThrowError("Nome do Produto não pode estar em branco");
    })

    it("Preço do produto tem que ser maior que zero",()=>{
        expect(()=>{
            let produto = new Product("Id1","prod1",0);
        }).toThrowError("Valor do produto tem que ser maior zero");
    })

    it ("Erro na tentativa de alterar nome do produto para vazio",()=>{
        expect(()=>{
            let produto = new Product("Id1","Prod1",1);
            produto.changeName("");
        }).toThrowError("Nome do Produto não pode estar em branco");
    })

    it("Erro na tentativa de alterar o preço para zero",()=>{
        expect(()=>{
            let produto = new Product("Id1","Prod1",1);
            produto.changePrice(0);
        }).toThrowError("Valor do produto tem que ser maior zero");
    })

    it("Produto criado com sucesso",()=>{
        let produto = new Product("IdPrd","Prod1",100);
        expect(produto.price).toBe(100);
    })

});
