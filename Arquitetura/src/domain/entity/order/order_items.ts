export default class OrderItem {
    private _id : string;
    private _productId : string;
    private _name : string;
    private _price : number;
    private _quantity : number;

    constructor (id : string, productId:string, name : string, price : number, quantity : number) {
        this._id = id;
        this._productId = productId;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id do Item não pode estar em branco");
        }
        if (this._productId.length === 0) {
            throw new Error("Id do produto não pode estar em branco");
        }
        if (this._name.length === 0) {
            throw new Error("Nome do Item não pode estar em branco");
        }

        if (this._price <= 0) {
            throw new Error("Preço do Item deve ser maior que zero");
        }

        if (this._quantity <= 0) {
            throw new Error("Quantidade do Item deve ser maior que zero");
        }
    }

    get id() : string {
        return this._id;
    }

    get productId() : string {
        return this._productId;
    }

    get name() : string {
        return this._name;
    }

    get price() : number {
        return this._price;
    }

    orderItemTotal(): number {
        return this._price * this._quantity;
    }

}