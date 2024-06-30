import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventGateway } from './gateway/event.gateway';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
