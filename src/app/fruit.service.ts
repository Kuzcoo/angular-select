import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FruitService {
  private fruitsUrl: string = 'assets/fruits.json';

  constructor(private http: HttpClient) { }

  getFruits(): Observable<any> {
    return this.http.get<any>(this.fruitsUrl);
  }
}
