import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${environment.baseUrl}/heroes/${id}`);
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      `${environment.baseUrl}/heroes?q=${term}&_limit=6`
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${environment.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(
      `${environment.baseUrl}/heroes/${hero.id}`,
      hero
    );
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.baseUrl}/heroes/${id}`);
  }
}
