import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    console.log(createBrandDto);
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException('Ups, brand not found');
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    console.log(updateBrandDto);
    // return `This action updates a #${id} brand`;
    let brandDB = this.findOne(id);
    console.log(brandDB);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        console.log(brandDB);

        return brandDB;
      }
      console.log(brand);

      return brand;
    });
    console.log(brandDB);

    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id === id);
    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
