import { Component, OnInit } from '@angular/core';
import { Musical } from 'src/app/models/musical';
import { MusicalService } from 'src/app/services/musical.service';

@Component({
  selector: 'kenjo-musical-list',
  templateUrl: './musical-list.component.html',
  styleUrls: ['./musical-list.component.scss']
})
export class MusicalListComponent implements OnInit {
  
  page = 1;
  pageSize = 6;
  
  musicals: Musical[] = [];

  constructor(private musicalService: MusicalService) { }
  
  ngOnInit(): void {
    this.musicalService.getMusicals().subscribe(musicals => {
      this.musicals = musicals;
      console.log(this.musicals);
    });
  }

}
