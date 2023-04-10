import { Model } from 'mongoose';
import { PlaneDocument } from '../schemas/plane.schema';
export declare class StorageService {
    private readonly planeModel;
    constructor(planeModel: Model<PlaneDocument>);
    find(body: any): Promise<Array<Object>>;
    getDate(year: string, month: string, day: string): Date;
    getDDay(date: Date): number;
}
