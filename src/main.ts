import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { port } from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('CEMEVYF Message Service')
    .setDescription('A service to sending messages using protocols like email, sms, etc.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  console.log(`Application is running on PORT: ${port}`);
  await app.listen(Number(port));
}
bootstrap();
