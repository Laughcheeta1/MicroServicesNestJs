import { Controller, Inject, Get, Post, Param, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('gateway')
export class GatewayController {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  // Métodos de Liquor Service
  @Post('createLiquor')
  async createLiquor(@Body() createLiquorDto: any) {
    return firstValueFrom(this.natsClient.send('createLiquor', createLiquorDto));
  }

  @Get('findAllLiquor')
  async findAllLiquor() {
    return firstValueFrom(this.natsClient.send('findAllLiquor', {}));
  }

  @Get('findOneLiquor/:id')
  async findOneLiquor(@Param('id') id: number) {
    return firstValueFrom(this.natsClient.send('findOneLiquor', id));
  }

  @Post('updateLiquor')
  async updateLiquor(@Body() updateLiquorDto: any) {
    return firstValueFrom(this.natsClient.send('updateLiquor', updateLiquorDto));
  }

  @Post('removeLiquor/:id')
  async removeLiquor(@Param('id') id: number) {
    return firstValueFrom(this.natsClient.send('removeLiquor', id));
  }

  // Métodos de Event Service (Booking Service)
  @Get('liquorOutOfStock')
  async liquorOutOfStock() {
    return firstValueFrom(this.natsClient.send('liquorOutOfStock', {}));
  }

  @Post('createEvent')
  async createEvent(@Body() createEventDto: any) {
    return firstValueFrom(this.natsClient.send('createEvent', createEventDto));
  }

  @Get('findAllEvents')
  async findAllEvents() {
    return firstValueFrom(this.natsClient.send('findAllEvents', {}));
  }

  @Get('findOneEvent/:id')
  async findOneEvent(@Param('id') id: string) {
    return firstValueFrom(this.natsClient.send('findOneEvent', id));
  }

  @Post('updateOneEvent/:id')
  async updateOneEvent(@Param('id') id: string, @Body() updateEventDto: any) {
    return firstValueFrom(this.natsClient.send('updateOneEvent', { id, ...updateEventDto }));
  }

  @Post('removeOneEvent/:id')
  async removeOneEvent(@Param('id') id: string) {
    return firstValueFrom(this.natsClient.send('removeOneEvent', id));
  }

  @Get('testConnection')
  async testConnection() {
  return await firstValueFrom(this.natsClient.send('testConnection', {}));
  }

}
