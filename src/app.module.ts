import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
import { SongsModule } from './songs/songs.module';
import { GenresModule } from './genres/genres.module';
import { PlaylistsModule } from './playlists/playlists.module';

@Module({
  imports: [
    ArtistsModule,
    AlbumsModule,
    SongsModule,
    GenresModule,
    PlaylistsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}