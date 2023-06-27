import Address from "../valueobjects/address";

export default class Customer {
    private _id : string;
    private _name : string;
    private _address : Address;
    private _active : boolean;

    constructor (id:string, name : string) {
        this._id = id;
        this._name = name;
        this._active = false;
        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get name() : string {
        return this._name;
    }

    get address() : Address {
        return this._address;
    }

    get active():boolean {
        return this._active;
    }

    changeName(name:string) {
        this._name = name;
        this.validate();
    }

    set address(address:Address) {
        this._address = address;
        this._address.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id do Consumidor não pode estar em branco");            
        }
        if (this._name.length === 0) {
            throw new Error("Nome do Consumidor não pode estar em branco");
        }
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Impossível ativar cliente com endereço em branco"); 
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}