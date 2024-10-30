import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventC } from './entities/event.entity';

@Injectable()
export class EventService {
  private readonly logger = new Logger(EventService.name);

  constructor(
    @Inject('NATS_SERVICE') private readonly client: ClientProxy,
    @InjectRepository(EventC)
    private eventRepository: Repository<EventC>,
  ) {  }

  liquorOutOfStock() {
    Logger.log('Liquor out of stock', 'EventService')
    return ;
  }

  async create(createEventDto: CreateEventDto): Promise<EventC> {
    let event: EventC = this.eventRepository.create(createEventDto);
    return await this.eventRepository.save(event);
  }

  findAll() {
    return `This action returns all event`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
