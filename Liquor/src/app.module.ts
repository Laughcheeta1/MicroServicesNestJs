import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiquorModule } from './liquor/liquor.module';
import { OrderModule } from './order/order.module';
import { Liquor } from './liquor/entities/liquor.entity';
import { Order } from './order/entities/order.entity';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'user',
      password: 'password',
      database: 'microservicios',
      entities: [Liquor, Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Liquor, Order]),
    LiquorModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
