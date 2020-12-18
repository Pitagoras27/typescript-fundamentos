var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParameter(target, propertyName, index) {
    // identificamos cada parametro que tenemos
    var metadataKey = "log_" + propertyName + "_parameters";
    // checkeamos si es o no un arreglo
    if (Array.isArray(target[metadataKey])) {
        // agregamos nuestro index al array
        console.log(target[metadataKey], '<<<<---');
        target[metadataKey].push(index);
    }
    else {
        // creamos un arreglo con index como único parametro
        console.log('<<<<---', target);
        target[metadataKey] = [index];
    }
    console.log(target[metadataKey]);
}
var P = /** @class */ (function () {
    function P() {
    }
    P.prototype.greet = function (message, additional) {
        return message;
    };
    __decorate([
        __param(1, logParameter)
    ], P.prototype, "greet", null);
    return P;
}());
var p = new P();
console.log(p.greet('Hola', 'Carlos'));
