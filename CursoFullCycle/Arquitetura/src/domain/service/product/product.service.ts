import Product from "../../entity/product/product";

export default class OrderService {
    static increasePrice(allproducts : Product[], percentage: number) {
        allproducts.forEach(produto => {
            produto.changePrice((produto.price*percentage)/100+produto.price);
        });
    }
}
