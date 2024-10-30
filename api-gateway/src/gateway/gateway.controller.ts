import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('gateway')
export class GatewayController {
  constructor(
    @Inject('EVENT_SERVICE') private readonly eventServiceClient: ClientProxy,
  ) {}

  // Use the client to send messages or make requests to the microservice
}