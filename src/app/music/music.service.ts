import { Injectable } from '@angular/core';
import { RestfulService } from '@shared/services/restful.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private readonly Restful: RestfulService
  ) {}

  searchArtist(q: string): Promise<any> {
    return this.Restful.get<any>('/search', { q: `artist:"${q}"` }).toPromise();
  }
}
