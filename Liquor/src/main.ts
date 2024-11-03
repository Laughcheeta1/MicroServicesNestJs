import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.NATS,
    options: {
      servers: 'nats://localhost:4222', // URL del servidor NATS
    },
  });

  // Swagger setup
  // const config = new DocumentBuilder()
  //     .setTitle('Liquor Orders API')
  //     .setDescription('API for managing liquor and orders')
  //     .setVersion('1.0')
  //     .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document); // Route: `/api`

  await app.listen();
  console.log('Microservicio está corriendo y conectado a NATS');
}
bootstrap();
