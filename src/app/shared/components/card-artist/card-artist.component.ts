import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
})
export class CardArtistComponent {

  @Input() artist: any;

  constructor() { }

  get artistDetailUrl(): string {
    return `/artist/${this.artist && this.artist.id}`;
  }

}
