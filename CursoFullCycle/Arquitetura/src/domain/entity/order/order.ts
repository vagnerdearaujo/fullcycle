import OrderItem from "./order_items";

export default class Order {
    private _id : string;
    private _custumerId : string;
    private _items : OrderItem[];
    private _total : number;

    constructor(id : string, custumerId : string, items : OrderItem[]) {
        this._id = id;
        this._custumerId = custumerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id da ordem não pode estar vazio");
        }
        if (this._custumerId.length === 0) {
            throw new Error("CustomerId não pode estar vazio");
        }
        if (this._items.length === 0) {
            throw new Error("Ordem deve conter itens");
        }
    }

    get id():string {
        return this._id;
    }

    get customerId() : string {
        return this._custumerId;
    }

    get items() : OrderItem[] {
        return this._items;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
      }

}