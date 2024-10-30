import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_SERVICE',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222', // NATS server URL
        },
      },
    ]),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}