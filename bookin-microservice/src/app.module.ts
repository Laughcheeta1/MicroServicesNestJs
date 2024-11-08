import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventC } from './event/entities/event.entity';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [
    EventModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Specify the name of the SQLite file
      entities: [EventC], // Add your entities here
      synchronize: true, // Set to true in development only
    }),
    TypeOrmModule.forFeature([EventC]),
    NatsModule
  ],
})
export class AppModule {}
