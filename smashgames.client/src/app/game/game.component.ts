import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../Models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  games$: BehaviorSubject<Game[]> = this.data.games$;
  constructor(private data: DataService) { }

}
