import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Model } from 'mongoose';
import { Plane, PlaneDocument } from '../schemas/plane.schema';
export declare class SubmitService {
    private planeModel;
    constructor(planeModel: Model<PlaneDocument>);
    create(requestSubmitDto: RequestSubmitDto): Promise<Plane>;
    getDate(year: string, month: string, day: string): Date;
}
