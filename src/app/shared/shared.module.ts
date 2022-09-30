import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { TopbarComponent } from './components/topbar/topbar.component';
import { CardArtistComponent } from './components/card-artist/card-artist.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';

// Services
import { DocumentTitleService } from './services/document-title.service';
import { RestfulService } from './services/restful.service';


@NgModule({
  declarations: [
    TopbarComponent,
    CardArtistComponent,
    CardAlbumComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    TopbarComponent,
    CardArtistComponent,
    CardAlbumComponent,
  ],
  providers: [
    DocumentTitleService,
    RestfulService,

    Title,
  ]
})
export class SharedModule { }
