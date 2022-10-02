import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

import { MusicService } from '../music.service';
import { Artist, PaginatedResponse } from '../music.model';


@Component({
  templateUrl: './artists.component.html',
})
export class ArtistsComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];
  public searchInput = '';

  public isLoading = false;
  public response?: PaginatedResponse<Artist>;
  public artists: Artist[] = [];

  public loadingOptions: AnimationOptions = {
    path: '/assets/lottie/listening.json'
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly Music: MusicService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.queryParams.subscribe((params) => {
        this.searchInput = params && params.q;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onSearchValueChanged(value: string): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: value && {q: value} || {}
    }).catch(console.log);
  }

  onSearch(): void {
    const reset = () => {
      this.isLoading = false;
      this.response = undefined;
      this.artists = [];
    };

    if (!this.searchInput || !this.searchInput.length) {
      reset();
      return;
    }

    this.isLoading = true;
    this.Music.searchArtist(this.searchInput).toPromise()
      .then((response) => {
        this.isLoading = false;
        this.response = response;
        this.artists = response && response.data || [];
      })
      .catch(reset);
  }
}
