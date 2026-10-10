import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArtistsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.artist.create({ data });
  }

  findAll() {
    return this.prisma.artist.findMany();
  }

  update(id: number, data: any) {
    return this.prisma.artist.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.artist.delete({ where: { id } });
  }
}