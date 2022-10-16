import { makeAutoObservable } from 'mobx';


class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Refrigerator'},
      {id: 2, name: 'Smartphones'},
    ];
    this._brands = [
      {id: 1, name: 'Sumsung'},
      {id: 2, name: 'Iphone'},
    ];
    this._devices = [
      {id: 4, name: 'Iphone 11', price: 22000, rating: 5, img: '590946d0-279b-4b02-ba77-5565959c8257.jpg'},
      {id: 5, name: 'Iphone 12', price: 27000, rating: 4, img: '63e0f31b-a30f-45aa-9ca4-d0b549d5adde.jpg'},
      {id: 6, name: 'Iphone 13', price: 52000, rating: 5, img: '3e656fb7-f622-463f-8cac-ed1bdda6e708.jpg'},
      {id: 4, name: 'SAMSUNG RB38T676FSA', price: 26400, rating: 5, img: 'd74dd718-8d2d-449d-b539-f71418cd33e0.jpg'},
      {id: 4, name: 'BEKO RCNE560E35ZXB', price: 29999, rating: 3, img: '4f00b976-74f3-489f-9a2a-0f0a3ef2efa7.jpg'},
    ];
    makeAutoObservable(this)
  }

  settypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}

export { DeviceStore };