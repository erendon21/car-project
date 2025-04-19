import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarModule, BrandsModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
