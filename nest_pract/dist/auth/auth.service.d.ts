import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RequestLoginDto } from './dto/requestLoginDto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string): Promise<any>;
    login(requestLoginDto: RequestLoginDto): Promise<any>;
}
