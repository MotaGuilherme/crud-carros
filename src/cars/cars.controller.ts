import { Controller } from '@nestjs/common';
import { CarsService } from './shared/cars.service';
import { Cars } from './shared/cars';
import { Post, Body, Get, Patch, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController { 
    constructor(
        private carService: CarsService
    ){}

    @Post()
    async create(@Body() car: Cars): Promise<Cars> {
      return this.carService.create(car);
    }

    @Get()
    async get(): Promise<Cars[]> { 
        return this.carService.getVeiculos();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() car: Cars): Promise<Cars> {
      return this.carService.liberaCarro(id, car);
  }

  }
