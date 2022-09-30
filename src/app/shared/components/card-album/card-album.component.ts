import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
})
export class CardAlbumComponent {

  @Input() album: any;

  constructor() { }

}
