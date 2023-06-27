import Product from "../../entity/product/product";
import ProductService from "../../service/product/product.service"


describe("Testes Productd.Service",() => {
    it ("Ajuste dos preços de todos os produtos",()=>{
        let prod1 = new Product("id1","prod1",100);
        let prod2 = new Product("id2","prod2",200);
        let prod3 = new Product("id3","prod3",300);
        let prod4 = new Product("id4","prod4",400);
        let prod5 = new Product("id5","prod5",500);
        let allprodutcs = [prod1,prod2,prod3,prod4,prod5];
        ProductService.increasePrice(allprodutcs,100);
        expect(prod1.price).toBe(200);
        expect(prod2.price).toBe(400);
        expect(prod5.price).toBe(1000);
    });
});