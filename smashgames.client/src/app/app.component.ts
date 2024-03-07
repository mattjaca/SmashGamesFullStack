import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { Studio } from './Models/studio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  meta: BehaviorSubject<Studio> = this.data.studio$;

  constructor(private data: DataService) { }

  ngOnInit(): void {


  }

  title = 'smashgames.client';
}
