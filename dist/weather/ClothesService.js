"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ropa_model_1 = require("../ropa/ropa.model");
let ClothesService = class ClothesService {
    constructor(clothesModel) {
        this.clothesModel = clothesModel;
    }
    async getClothesByCriteria(clima, formalidad, edad) {
        const query = { clima };
        if (formalidad)
            query.formalidad = formalidad;
        if (edad)
            query.edad = edad;
        return this.clothesModel.find(query).exec();
    }
};
exports.ClothesService = ClothesService;
exports.ClothesService = ClothesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ropa_model_1.Ropa.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClothesService);
//# sourceMappingURL=ClothesService.js.map