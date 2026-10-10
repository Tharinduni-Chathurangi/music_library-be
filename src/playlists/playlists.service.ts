import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlaylistsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    const { name, cover, songIds } = data;

    return this.prisma.playlist.create({
      data: {
        name,
        cover,
        playlistSongs: {
          create: songIds?.map((songId: number) => ({
            song: { connect: { id: songId } },
          })),
        },
      },
      include: {
        playlistSongs: {
          include: { song: true },
        },
      },
    });
  }

  findAll() {
    return this.prisma.playlist.findMany({
      include: {
        playlistSongs: {
          include: { song: true },
        },
      },
    });
  }

  update(id: number, data: any) {
    return this.prisma.playlist.update({
      where: { id },
      data: {
        name: data.name,
        cover: data.cover,
      },
    });
  }

  remove(id: number) {
    return this.prisma.playlist.delete({ where: { id } });
  }
}