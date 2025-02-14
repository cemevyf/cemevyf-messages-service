import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMessageRequestDto } from './dto/send-message-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('message')
  sendMailWithTemplate(@Body() sendMailDto: SendMessageRequestDto): any {
    return this.appService.sendMail(sendMailDto);
  }
}
