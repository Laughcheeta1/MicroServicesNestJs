// src/liquor/liquor.service.ts
import { Injectable } from '@nestjs/common';
import { CreateLiquorDto } from './dto/create-liquor.dto';
import { UpdateLiquorDto } from './dto/update-liquor.dto';

@Injectable()
export class LiquorService {
  private liquors = [];

  create(createLiquorDto: CreateLiquorDto) {
    const newLiquor = { id: Date.now(), ...createLiquorDto };
    this.liquors.push(newLiquor);
    return newLiquor;
  }

  findAll() {
    return this.liquors;
  }

  findOne(id: number) {
    return this.liquors.find(liquor => liquor.id === id);
  }

  update(id: number, updateLiquorDto: UpdateLiquorDto) {
    const liquorIndex = this.liquors.findIndex(liquor => liquor.id === id);
    if (liquorIndex > -1) {
      this.liquors[liquorIndex] = { ...this.liquors[liquorIndex], ...updateLiquorDto };
      return this.liquors[liquorIndex];
    }
    return null;
  }

  remove(id: number) {
    const liquorIndex = this.liquors.findIndex(liquor => liquor.id === id);
    if (liquorIndex > -1) {
      const removedLiquor = this.liquors.splice(liquorIndex, 1);
      return removedLiquor[0];
    }
    return null;
  }
}