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
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const plane_schema_1 = require("../schemas/plane.schema");
const TIME_ZONE = 3240 * 10000;
const oneDay = 1000 * 60 * 60 * 24;
let StorageService = class StorageService {
    constructor(planeModel) {
        this.planeModel = planeModel;
    }
    async find(body) {
        try {
            if (body.id) {
                const planeList = await this.planeModel
                    .findOne({ _id: body.id })
                    .exec();
                console.log(planeList);
                const dday = this.getDDay(planeList.expireAt);
                return [{ _id: planeList.id, content: planeList.content, dday: dday }];
            }
            else {
                const planesList = await this.planeModel.find().exec();
                console.log(planesList);
                return planesList;
            }
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
    getDDay(date) {
        const parsedNow = new Date(+new Date() + TIME_ZONE)
            .toISOString()
            .split('T')[0];
        const parsedNowDate = new Date(parsedNow);
        const dday = (date.getTime() - parsedNowDate.getTime()) / oneDay;
        console.log(dday);
        return dday;
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StorageService.prototype, "find", null);
StorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(plane_schema_1.Plane.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map