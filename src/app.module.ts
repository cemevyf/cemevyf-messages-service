require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer/';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { smtp } from 'config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: smtp.host,
        port: Number(smtp.port),
        tls: {
          ciphers: 'SSLv3',
        },
        secure: true,
        auth: {
          user: smtp.username,
          pass: smtp.password,
        },
      },
      defaults: {
        from: '"CEMEVYF Turnos" <turnos@vidayfortaleza.com>', // outgoing email ID
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
