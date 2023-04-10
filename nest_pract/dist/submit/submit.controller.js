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
exports.SubmitController = void 0;
const common_1 = require("@nestjs/common");
const submit_service_1 = require("./submit.service");
const requestSubmitDto_1 = require("./dto/requestSubmitDto");
let SubmitController = class SubmitController {
    constructor(submitService) {
        this.submitService = submitService;
    }
    create(requestSubmitDto) {
        return this.submitService.create(requestSubmitDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requestSubmitDto_1.RequestSubmitDto]),
    __metadata("design:returntype", void 0)
], SubmitController.prototype, "create", null);
SubmitController = __decorate([
    (0, common_1.Controller)('airplane/submit'),
    __metadata("design:paramtypes", [submit_service_1.SubmitService])
], SubmitController);
exports.SubmitController = SubmitController;
//# sourceMappingURL=submit.controller.js.map