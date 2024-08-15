import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const data = this.appService.getHello();
    return { data };
  }

  @Get('user')
  getUser() {
    return {
      data: { username: 'Desse', fullName: 'Desmond Emojevu' },
    };
  }

  @Post('signup')
  signup(@Body() body: any) {
    return {
      message: 'Your account has been created! Now log in.',
      data: { user: body?.firstName },
    };
  }
}
