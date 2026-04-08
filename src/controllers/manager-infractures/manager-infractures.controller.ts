import { Body, Controller, Post, Put } from '@nestjs/common';
import { Request } from 'express';

@Controller('')
export class ManagerInfracturesController {
  constructor() {}

  @Post('/infractures')
  public createInfractures(@Body() req: any): Promise<string> {
    // const { body } = req;

    return new Promise((resolve) => {
      resolve('This action adds a new infracture');
    });
  }

  @Put('/infractures')
  public updateInfractures() {
    return 'This action updates a infracture';
  }
}
