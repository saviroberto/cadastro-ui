import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) { }

    addHero(hero: string): Observable<string> {
        return this.http.post<string>('http://localhost:8080/bombeiros/pessoa', hero);
    }

}