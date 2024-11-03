import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { NatsModule } from '../transport/nats.module'; // Asegúrate de ajustar la ruta según sea necesario

@Module({
  imports: [NatsModule],
  controllers: [GatewayController],
})
export class GatewayModule {}
