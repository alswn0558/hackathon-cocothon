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
exports.SubmitService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const plane_schema_1 = require("../schemas/plane.schema");
let SubmitService = class SubmitService {
    constructor(planeModel) {
        this.planeModel = planeModel;
    }
    async create(requestSubmitDto) {
        try {
            const parsedDate = this.getDate(requestSubmitDto.year, requestSubmitDto.month, requestSubmitDto.day);
            const parsedData = {
                content: requestSubmitDto.content,
                expireAt: parsedDate,
            };
            const createdSubmit = await new this.planeModel(parsedData).save();
            return createdSubmit;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    getDate(year, month, day) {
        const dateString = year + '-' + month + '-' + day;
        const date = new Date(dateString);
        return date;
    }
};
SubmitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(plane_schema_1.Plane.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SubmitService);
exports.SubmitService = SubmitService;
//# sourceMappingURL=submit.service.js.map