import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SharedModule } from '@shared/shared.module';

import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailComponent } from './artist/detail/artist-detail.component';

import { MusicService } from './music.service';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistDetailComponent,
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule,
  ],
  providers: [
    MusicService,
  ]
})
export class MusicModule { }
