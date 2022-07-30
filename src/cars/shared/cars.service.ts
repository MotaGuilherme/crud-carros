import { Injectable } from '@nestjs/common';
import { Cars } from './cars';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class CarsService { 
    constructor(@InjectModel('Cars') private readonly carModel: Model<Cars>) { }

    async create(car: Cars){
        
        const teste = await this.carModel.findOne({rented: "true"}).exec()

        if(!teste){
        const createCar = new this.carModel(car);
        return await createCar.save();            
        }
        console.log("Um carro por vez")  
    }

    async getVeiculos() {
       
      return await this.carModel.find().exec()
 
    }

    async liberaCarro(id: string, car: Cars) {
       await this.carModel.updateOne({ _id: id }, car).exec()
       return this.getById(id);
    }
    async getById(id: string) {
        return await this.carModel.findById(id).exec();
    }
}
