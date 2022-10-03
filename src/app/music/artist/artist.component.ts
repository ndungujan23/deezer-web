import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album, Artist, Track } from '../music.model';
import { MusicService } from '../music.service';

@Component({
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public artistId?: number;

  public artist?: Artist;
  public albums: Album[] = [];
  public topTracks: Track[] = [];

  public subscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly Music: MusicService
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.artistId = params && params.id;
      this.loadUserData(this.artistId);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  formattedTime(value: number): string {
    return new Date(value).toISOString().slice(11, 19);
  }

  loadUserData(id?: number): void {
    const reset = () => {
      this.isLoading = false;
      this.artist = undefined;
      this.albums = [];
      this.topTracks = [];
    };

    if (!id) {
      reset();
      return;
    }

    this.isLoading = true;
    Promise.all([
      this.Music.getArtist(id).toPromise(),
      this.Music.getArtistAlbums(id).toPromise(),
      this.Music.getArtistTopTracks(id).toPromise(),
    ]).then((results) => {
      this.isLoading = false;

      this.artist = results && results[0];
      this.albums = results && results[1] && results[1].data || [];
      this.topTracks = results && results[2] && results[2].data || [];
    }).catch(reset);
  }
}
