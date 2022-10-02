import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

import { MusicService } from './music.service';
import { Artist, PaginatedResponse } from './music.model';


@Component({
  templateUrl: './music.component.html',
})
export class MusicComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];
  public searchInput = '';

  public isLoading = false;
  public artists?: PaginatedResponse<Artist>;

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
    if (!this.searchInput || !this.searchInput.length) {
      this.artists = undefined;
      return;
    }

    this.isLoading = true;
    this.Music.searchArtist(this.searchInput).toPromise()
      .then((artists) => {
        this.isLoading = false;
        this.artists = artists;
      })
      .catch(() => {
        this.isLoading = false;
        this.artists = undefined;
      });
  }
}
