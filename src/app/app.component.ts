import { Component, OnInit } from '@angular/core';
import { MusicalService } from './services/musical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private musicalService: MusicalService) {}

  ngOnInit() {
  }
}
