import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit, OnDestroy {

  public isMenuVisible = false;
  public searchInput = '';
  public currentUrl = '';

  public query$?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.query$ = this.activatedRoute.queryParams.subscribe((params) => {
      const queryValue = params && params.q;
      if (queryValue && queryValue !== this.searchInput) {
        this.searchInput = queryValue;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.query$) {
      this.query$.unsubscribe();
    }
  }

  toggle(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  onSearchValueChanged(value: string): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: value && { q: value } || {}
    });
  }
}
