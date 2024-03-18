import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studio } from './Models/studio';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from './Models/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studio$: BehaviorSubject<Studio> = new BehaviorSubject<Studio>({
    name: '',
    description: '',
    games: {
      $values: []
    }
  });

  games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  constructor(private http: HttpClient) {
    this.getStudio(1);
  }

  getAllStudios(): Observable<Studio[]> {
   return this.http.get<Studio[]>('/api/Studios');
  }
  getStudio(id: number) {
    this.http.get<Studio>('/api/Studios/' + id).subscribe(data => {
      this.studio$.next(data);
      this.games$.next(data.games.$values);
    })
  }
}
