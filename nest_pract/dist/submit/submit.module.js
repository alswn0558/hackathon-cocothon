"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitModule = void 0;
const common_1 = require("@nestjs/common");
const submit_service_1 = require("./submit.service");
const submit_controller_1 = require("./submit.controller");
const mongoose_1 = require("@nestjs/mongoose");
const plane_schema_1 = require("../schemas/plane.schema");
let SubmitModule = class SubmitModule {
};
SubmitModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: plane_schema_1.Plane.name, schema: plane_schema_1.PlaneSchema }]),
        ],
        controllers: [submit_controller_1.SubmitController],
        providers: [submit_service_1.SubmitService],
    })
], SubmitModule);
exports.SubmitModule = SubmitModule;
//# sourceMappingURL=submit.module.js.map