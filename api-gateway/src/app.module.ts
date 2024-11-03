import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { NatsModule } from './transport/nats.module';

@Module({
  imports: [GatewayModule, NatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
