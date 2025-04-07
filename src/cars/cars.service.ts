import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Jeep', model: 'Renegade' },
    { id: 2, brand: 'Mercedes', model: 'Benz' },
    { id: 3, brand: 'Nissa', model: 'Sentra' },
    { id: 4, brand: 'Honda', model: 'Civic' },
  ];

  finAll() {
    return this.cars;
  }

  findOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Ups! car id: ${id} not found`);
    }
    return car;
  }

  createCar(data: any) {
    const newCar = { ...data };
    console.log(newCar, 'Carro nuevo');
    this.cars.push(newCar);

    return newCar;
  }
}
