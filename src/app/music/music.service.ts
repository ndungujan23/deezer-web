import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { RestfulService } from '@shared/services/restful.service';

import { Album, Artist, PaginatedResponse, Track } from './music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private readonly Restful: RestfulService
  ) {}

  searchArtist(q: string): Observable<PaginatedResponse<Artist>> {
    return this.Restful.get('/search/artist', { q });
  }

  getArtist(id: number): Observable<Artist> {
    return this.Restful.get(`/artist/${id}`);
  }

  getArtistAlbums(id: number): Observable<PaginatedResponse<Album>> {
    return this.Restful.get(`/artist/${id}/albums`);
  }

  getArtistTopTracks(id: number): Observable<PaginatedResponse<Track>> {
    return this.Restful.get(`/artist/${id}/top`);
  }
}
