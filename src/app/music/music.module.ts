import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';

import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailComponent } from './artist/detail/artist-detail.component';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistDetailComponent,
  ],
  imports: [
    CommonModule,

    MusicRoutingModule,
  ]
})
export class MusicModule { }
