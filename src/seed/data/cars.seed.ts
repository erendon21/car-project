import { Cars } from 'src/cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Cars[] = [
  { id: uuid(), brand: 'Jeep', model: 'Renegade' },
  { id: uuid(), brand: 'Mercedes', model: 'Benz' },
  { id: uuid(), brand: 'Nissa', model: 'Sentra' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
];
