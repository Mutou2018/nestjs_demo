import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { DepartmentService } from './department/department.service';
import { OtherService } from './other/other.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
