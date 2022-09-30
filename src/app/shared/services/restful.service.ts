import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

class QueryParams { [key: string]: any; }

@Injectable({
  providedIn: 'root'
})
/**
 * Restful service class providing HTTP request methods
 */
export class RestfulService {

  private readonly domain = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Do a basic GET request to the provided URL
   * @param path request path
   * @param params Query params for url if available
   */
   public get<T>(path: string, params: QueryParams = {}): Observable<T> {
    return this.getOutsider(this.url(path), params);
  }

  /**
   * Do a basic GET request to the provided URL
   * @param path Path to endpoint
   * @param [queryParams] optional query params
   */
   public getOutsider<T>(url: string, params: QueryParams = {}): Observable<T> {
    return this.httpClient.get<T>(this.url(url), { params });
  }

  /**
   * Prepend the provided string with the domain to build a URL
   * @param path Path to add to the domain
   */
  private url(path: string): string {
    return new URL(path, this.domain).toJSON();
  }
}
