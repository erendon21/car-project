import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  { id: uuid(), name: 'Jeep', createdAt: new Date().getDate() },
  { id: uuid(), name: 'Mercedes', createdAt: new Date().getDate() },
  { id: uuid(), name: 'Nissa', createdAt: new Date().getDate() },
  { id: uuid(), name: 'Honda', createdAt: new Date().getDate() },
];
