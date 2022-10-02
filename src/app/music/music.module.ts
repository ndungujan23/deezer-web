import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { MusicRoutingModule } from './music-routing.module';
import { SharedModule } from '@shared/shared.module';

import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';

import { MusicService } from './music.service';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    LottieModule.forRoot({ player: playerFactory }),

    SharedModule,

    MusicRoutingModule,
  ],
  providers: [
    MusicService,
  ]
})
export class MusicModule { }
