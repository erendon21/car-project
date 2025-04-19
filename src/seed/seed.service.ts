import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carService.fillCarWithSeed(CARS_SEED);
    this.brandService.fillBrandsWithSeed(BRAND_SEED);
    return `This action excutes mock data`;
  }
}
