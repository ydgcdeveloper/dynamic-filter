import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from '../api-urls';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCharacters(params: any) {
    const queryString = this.convertParamsToQueryString(params);
    return this.http
      .get(ApiUrls.characters + '/?' + queryString)
      .pipe(map((data: any) => data));
  }

  convertParamsToQueryString(params: any) {
    return Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
  }
}
