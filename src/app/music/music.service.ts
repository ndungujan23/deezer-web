import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { RestfulService } from '@shared/services/restful.service';

import { Artist, PaginatedResponse } from './music.model';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private readonly Restful: RestfulService
  ) {}

  searchArtist(q: string, limit: number = 10): Observable<PaginatedResponse<Artist>> {
    return this.Restful.get('/search/artist', { q, limit });
  }
}
