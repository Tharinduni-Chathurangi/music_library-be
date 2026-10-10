import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.album.create({ data });
  }

  findAll() {
    return this.prisma.album.findMany({
      include: { artist: true },
    });
  }

  update(id: number, data: any) {
    return this.prisma.album.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.album.delete({ where: { id } });
  }
}