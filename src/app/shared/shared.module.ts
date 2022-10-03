import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Components
import { TopbarComponent } from './components/topbar/topbar.component';
import { CardArtistComponent } from './components/card-artist/card-artist.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';

// Services
import { DocumentTitleService } from './services/document-title.service';
import { RestfulService } from './services/restful.service';

// Pipes
import { ShortNumberPipe } from './pipes/short-number.pipe';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [
    TopbarComponent,
    CardArtistComponent,
    CardAlbumComponent,

    ShortNumberPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    LottieModule.forRoot({player: playerFactory}),
  ],
  exports: [
    TopbarComponent,
    CardArtistComponent,
    CardAlbumComponent,
    ShortNumberPipe,
  ],
  providers: [
    DocumentTitleService,
    RestfulService,

    Title,
    ShortNumberPipe,
  ]
})
export class SharedModule { }
