import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ShowService } from './database/service/show.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly showService: ShowService,
  ) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  findOne(@Param('id') token: string) {
    return this.showService.findShow(token);
  }
}
