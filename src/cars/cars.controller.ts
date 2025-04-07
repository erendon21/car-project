import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  // Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  //   private cars = ['Nissan', 'Jeep', 'Mercedes'];
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getCars() {
    // return this.cars;
    return this.carsService.finAll();
  }

  @Get(':id')
  getCar(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return this.carsService.findOne(+id);
  }

  @Post()
  createCar(@Body() data: any) {
    console.log(data);
    return this.carsService.createCar(data);
  }

  // @Patch(':id')
  // patchCar(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
  //   return data;
  // }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
