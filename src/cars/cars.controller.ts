import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  ParseUUIDPipe,
  UsePipes,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

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
  getCar(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOne(id);
  }

  @Post()
  @UsePipes()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  patchCar(@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdateCarDto) {
    return this.carsService.updateCar(id, data);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
