import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Posts } from "./models/post";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('action')
  action(@Req() req:any,@Body() createCatDto:Posts): void {
    if(req.method === 'POST') this.appService.action(createCatDto);
  }

  @Get('list')
  list(): Promise<Posts[] | []> {
    return this.appService.list();
  }
}
