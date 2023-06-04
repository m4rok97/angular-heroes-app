import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/heroes');
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`http://localhost:3000/heroes/${id}`);
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`http://localhost:3000/heroes?q=${term}&_limit=6`);
  }
}
