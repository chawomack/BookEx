import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {
  url: string = "http://localhost:3500";

  constructor(private http: Http) { }

  search(term: string): Observable<string[]> {
    console.log(term);
    return this.http.get(`${this.url}/schools/?name=${term}`)
    .map((r: Response) => r.json().data as string[]);
  }

}
