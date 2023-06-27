import { IntegerDataType } from "sequelize";
import { validate } from "uuid";

export default class Address {
    private _street : string;
    private _number : number;
    private _zip : string;
    private _city : string;

    constructor(street : string, number : number, zip : string, city : string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
        this.validate();
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("A rua não pode estar em branco");
        }
        if (this._number === 0) {
            throw new Error("O número não pode estar em branco");
        }
        if (this._zip.length === 0) {
            throw new Error("O CEP não pode estar em branco");
        }
        if (this._city.length === 0) {
            throw new Error("A cidade não pode estar em branco");
        }
    }

    get street() : string {
        return this._street;
    }
    get number() : number {
        return this._number;
    }
    get zip() : string {
        return this._zip;
    }
    get city() : string     {
        return this._city;
    }

    length() : number {
        return this._street.length+this._zip.length+this._city.length;
    }
}