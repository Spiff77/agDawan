import {Supplier} from './Supplier';

export class Product {
  private _supplier: Supplier;

  constructor(private _name: string, private _description: string, private _category: string, private _price: number, private _promo?: number ) {
  }

  get category(): string {
    return this._category;
  }

  get promo(): number {
    return this._promo;
  }

  set promo(value: number) {
    this._promo = value;
  }

  set category(value: string) {
    this._category = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get supplier(): Supplier {
    return this._supplier;
  }

  set supplier(value: Supplier) {
    this._supplier = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
