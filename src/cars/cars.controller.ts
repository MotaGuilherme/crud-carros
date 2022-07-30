import { Controller, UseGuards } from '@nestjs/common';
import { CarsService } from './shared/cars.service';
import { Cars } from './shared/cars';
import { Post, Body, Get, Patch, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cars')
@Controller('cars')
export class CarsController { 
    constructor(
        private carService: CarsService
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() car: Cars): Promise<Cars> {
      return this.carService.create(car);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async get(): Promise<Cars[]> { 
        return this.carService.getVeiculos();
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() car: Cars): Promise<Cars> {
      return this.carService.liberaCarro(id, car);
  }

  }
