import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { NatsModule } from 'src/transports/nats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventC } from './entities/event.entity';

@Module({
  imports: [
    NatsModule,
    TypeOrmModule.forFeature([EventC]) // Registra la entidad EventC aquí
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}

