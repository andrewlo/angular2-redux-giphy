import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GiphyService {
  private key: string = 'dc6zaTOxFJmzC';

  constructor(private http: Http) {}

  search(term: string, offset: number = 0) {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${term}&offset=${offset}&api_key=${this.key}`);
  }

  getDetails(id: string) {
    return this.http.get(`http://api.giphy.com/v1/gifs/${id}?api_key=${this.key}`);
  }
}
