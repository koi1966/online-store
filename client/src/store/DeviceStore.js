import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name:'Холодильник'},
            {id: 2, name:'Смартфоны'},
            {id: 3, name:'Смартфоны3'},
            {id: 4, name:'Смартфоны4'},
            {id: 5, name:'Смартфоны5'},

        ]
        this._brands = [
            {id: 1, name:'Samsung'},
            {id: 2, name:'Apple'},
            {id: 3, name:'Lenivo'},
            {id: 4, name:'Samsungs'}
        ]
        this._devices = [
            {id: 1, name:'Iphone 12 pro', price: 2500, rating:5, img:'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name:'Iphone 12 pro', price: 2500, rating:5, img:'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name:'Iphone 12 pro', price: 2500, rating:5, img:'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name:'Iphone 12 pro', price: 2500, rating:5, img:'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 5, name:'Iphone 12 pro', price: 2500, rating:5, img:'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},

        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setType(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(){
        this._selectedType = true
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}