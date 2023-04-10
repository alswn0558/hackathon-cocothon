import { HydratedDocument } from 'mongoose';
export type PlaneDocument = HydratedDocument<Plane>;
export declare class Plane {
    content: string;
    expireAt: Date;
}
export declare const PlaneSchema: any;
