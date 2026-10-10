import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.genre.create({ data });
  }

  findAll() {
    return this.prisma.genre.findMany();
  }

  update(id: number, data: any) {
    return this.prisma.genre.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({ where: { id } });
  }
}