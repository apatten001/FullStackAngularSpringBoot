"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    // access modifiers
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        /** Traditional constructor
         * private _firstName: string;
        private _lastName: string;
        constructor(firstName:string, lastName: string){
    
            this._firstName = firstName;
            this._lastName = lastName;
        }  */
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
var myCustomer = new Customer("Arnold", "Arnold");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
