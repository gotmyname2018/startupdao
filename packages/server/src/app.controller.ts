import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as DappLib from '@startupdao/dapp-lib';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get('countHellos')
  async countHellos(): Promise<string> {
    return await DappLib["countHellos"].call(null, {});
  }
}
