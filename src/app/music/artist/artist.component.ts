import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MusicService } from '../music.service';

@Component({
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit, OnDestroy {

  public q = '';
  public artists: any[] = [];

  public query$?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly Music: MusicService
  ) { }

  ngOnInit(): void {
    this.query$ = this.activatedRoute.queryParams.subscribe((params) => {
      this.q = params && params.q;
      if (this.q) {
        this.searchArtist(this.q);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.query$) {
      this.query$.unsubscribe();
    }
  }

  searchArtist(q: string): void {
    this.Music.searchArtist(q).then((response) => {
      this.artists = Array.from(response.data).map((responseData: any) => responseData.artist);
    }).catch(console.log);
  }
}
