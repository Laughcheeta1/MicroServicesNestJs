import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @MessagePattern('liquorOutOfStock')
  liquorOutOfStock() {
    return this.eventService.liquorOutOfStock();
  }

  @MessagePattern('createEvent')
  create(@Payload() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @MessagePattern('findAllEvents')
  findAll() {
    return this.eventService.findAll();
  }

  @MessagePattern('findOneEvent')
  findOne(@Payload('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @MessagePattern('updateOneEvent')
  update(@Payload('id') id: string, @Payload() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @MessagePattern('removeOneEvent')
  remove(@Payload('id') id: string) {
    return this.eventService.remove(+id);
  }
}
