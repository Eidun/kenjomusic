import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kenjo-musical-list',
  templateUrl: './musical-list.component.html',
  styleUrls: ['./musical-list.component.scss']
})
export class MusicalListComponent implements OnInit {

  constructor() { }

  page = 1;

  ngOnInit(): void {
  }

}
