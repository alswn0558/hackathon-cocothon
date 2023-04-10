import { SubmitService } from './submit.service';
import { RequestSubmitDto } from './dto/requestSubmitDto';
import { Plane } from '../schemas/plane.schema';
export declare class SubmitController {
    private readonly submitService;
    constructor(submitService: SubmitService);
    create(requestSubmitDto: RequestSubmitDto): Promise<Plane>;
}
