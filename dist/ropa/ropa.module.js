"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RopaModule = void 0;
const common_1 = require("@nestjs/common");
const ropa_service_1 = require("./ropa.service");
const ropa_repository_factory_1 = require("./factories/ropa-repository.factory");
const mongo_ropa_repository_1 = require("./repositories/mongo-ropa.repository");
const mongoose_1 = require("@nestjs/mongoose");
const ropa_controller_1 = require("./ropa.controller");
const ropa_model_1 = require("./ropa.model");
let RopaModule = class RopaModule {
};
exports.RopaModule = RopaModule;
exports.RopaModule = RopaModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: ropa_model_1.Ropa.name, schema: ropa_model_1.RopaSchema }])],
        controllers: [ropa_controller_1.RopaController],
        providers: [ropa_service_1.RopaService, ropa_repository_factory_1.RopaRepositoryFactory, mongo_ropa_repository_1.MongoRopaRepository],
    })
], RopaModule);
//# sourceMappingURL=ropa.module.js.map