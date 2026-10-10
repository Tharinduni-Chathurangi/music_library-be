import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.song.create({
      data: {
        name: data.name,
        releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
        artistId: Number(data.artistId),
        albumId: data.albumId ? Number(data.albumId) : null,
        genreId: data.genreId ? Number(data.genreId) : null,
      },
    });
  }

  findAll() {
    return this.prisma.song.findMany({
      include: {
        artist: true,
        album: true,
        genre: true,
      },
    });
  }

  update(id: number, data: any) {
    return this.prisma.song.update({
      where: { id },
      data: {
        name: data.name,
        releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
        artistId: Number(data.artistId),
        albumId: Number(data.albumId),
        genreId: Number(data.genreId),
      },
    });
  }

  remove(id: number) {
    return this.prisma.song.delete({ where: { id } });
  }
}