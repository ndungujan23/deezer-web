import { Component, Input } from '@angular/core';
import { Artist } from '../../../music/music.model';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
})
export class CardArtistComponent {

  @Input() artist?: Artist;

  constructor() {
  }

  get headerStyle(): any {
    return {
      'background-image': `url(${this.artist?.picture_big})`
    };
  }

  get detail(): string {
    return `/music/artists/${this.artist && this.artist.id}`;
  }
}
