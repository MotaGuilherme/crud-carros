import { CarsService } from './shared/cars.service';
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './schemas/cars.schma';

@Module({
    imports: [         
        MongooseModule.forFeature([{ name: 'Cars', schema: CarSchema }]),
    ],
    controllers: [CarsController],
    providers: [
        CarsService,
    ],
    exports: [CarsService]
})
export class CarsModule { }
