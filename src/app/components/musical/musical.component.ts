import { Component, Input, OnInit } from '@angular/core';
import { Musical } from 'src/app/models/musical';

@Component({
  selector: 'kenjo-musical',
  templateUrl: './musical.component.html',
  styleUrls: ['./musical.component.scss']
})
export class MusicalComponent implements OnInit {

  @Input() musical: Musical;

  constructor() { }

  ngOnInit(): void {
  }

}
