import {Injectable, Logger} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMessageRequestDto } from './dto/send-message-request.dto';
import { smtp } from 'config';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);
  constructor(private readonly mailerService: MailerService) { }

  public async sendMail(sendMailDto: SendMessageRequestDto): Promise<void> {
      this.logger.debug('Send mail', { service: AppService.name });
      return this
          .mailerService
          .sendMail({
              to: sendMailDto.to, // List of receivers email address
              from: smtp.username,
              subject: sendMailDto.subject,
              template: sendMailDto.template,
              context: sendMailDto.context,
          });
  }
}
