import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const port = this.configService.get<number>('PORT');
    const mongo_uri = this.configService.get<string>('MONGODB_URI');
    return `Hello World! Server is running on port ${port} with MongoDB URI ${mongo_uri}`;
  }
}
