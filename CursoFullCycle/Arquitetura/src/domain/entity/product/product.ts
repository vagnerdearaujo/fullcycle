export default class Product {
    private _id : string;
    private _name : string;
    private _price : number;

    constructor(id : string, name : string, price : number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    validate(){
        if (this._id.length === 0) {
            throw new Error("Id do Produto não pode estar em branco");
        }

        if (this._name.length === 0) {
            throw new Error("Nome do Produto não pode estar em branco");
        }

        if (this._price <= 0) {
            throw new Error("Valor do produto tem que ser maior zero");
        }
    }

    get id() : string {
        return this._id;
    }

    get name() : string {
        return this._name;
    }

    get price() : number {
        return this._price;
    }

    changeName(newname : string) {
        this._name = newname;
        this.validate();
    }

    changePrice(newprice : number) {
        this._price = newprice;
        this.validate();
    }
}