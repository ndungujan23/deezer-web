import { Component, Input } from '@angular/core';
import { Album } from '../../../music/music.model';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
})
export class CardAlbumComponent {

  @Input() album?: Album;

  constructor() { }

}
