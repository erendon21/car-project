import { Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Cars[] = [
    // { id: uuid(), brand: 'Jeep', model: 'Renegade' },
    // { id: uuid(), brand: 'Mercedes', model: 'Benz' },
    // { id: uuid(), brand: 'Nissa', model: 'Sentra' },
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
  ];

  finAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Ups! car id: ${id} not found`);
    }
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const findModel = this.cars.find(
      (element) => element.model === createCarDto.model,
    );

    if (findModel) {
      return 'This model already exist';
    }

    const newCar: Cars = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  updateCar(id: string, data: UpdateCarDto) {
    let carId = this.findOne(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carId = {
          ...carId,
          ...data,
          id,
        };
        return carId;
      }
      return car;
    });

    return carId;
  }

  delete(id: string) {
    console.log(id);
    this.findOne(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarWithSeed(cars: Cars[]) {
    this.cars = cars;
  }
}
