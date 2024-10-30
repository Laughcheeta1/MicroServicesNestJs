import {Controller, Get, Post} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LiquorService } from './liquor.service';
import { CreateLiquorDto } from './dto/create-liquor.dto';
import { UpdateLiquorDto } from './dto/update-liquor.dto';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller('liquor')
export class LiquorController {
  constructor(private readonly liquorService: LiquorService) {}

  @MessagePattern('createLiquor')
  create(@Payload() createLiquorDto: CreateLiquorDto) {
    return this.liquorService.create(createLiquorDto);
  }

  @MessagePattern('findAllLiquor')
  findAll() {
    return this.liquorService.findAll();
  }

  @MessagePattern('findOneLiquor')
  findOne(@Payload() id: number) {
    return this.liquorService.findOne(id);
  }

  @MessagePattern('updateLiquor')
  update(@Payload() updateLiquorDto: UpdateLiquorDto) {
    return this.liquorService.update(updateLiquorDto.id, updateLiquorDto);
  }

  @MessagePattern('removeLiquor')
  remove(@Payload() id: number) {
    return this.liquorService.remove(id);
  }
}
