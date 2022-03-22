import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Swagger import 
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Stockdaddy API Documentation')
    .setDescription('Stockdaddy API documentation (Version 1.0.0)')
    .setVersion('1.0.0')
    .addTag('StockDaddy')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
