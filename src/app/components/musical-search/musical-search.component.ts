import { Album, Genres } from 'src/app/models/album';
import { MusicalService } from 'src/app/services/musical.service';
import { Musical } from 'src/app/models/musical';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Artist } from 'src/app/models/artist';


@Component({
  selector: 'kenjo-musical-search',
  templateUrl: './musical-search.component.html',
  styleUrls: ['./musical-search.component.scss']
})
export class MusicalSearchComponent implements OnInit {
 
  @Output() musicals = new EventEmitter<Musical[]>();

  searchForm: FormGroup;
  showExtraFilters: boolean = false;
  artistFilter: boolean = true;
  albumFilter: boolean = true;
  
  genres: string[] = Object.values(Genres);

  constructor(private musicalService: MusicalService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchName: [''],
      type: [''],
      genre: ['']
    })
   }
  
  ngOnInit(): void {
    const filteredMusicals = combineLatest([this.musicalService.getMusicals(), this.searchForm.valueChanges])
      .pipe(map(([musicals, searchFilters]) => 
         this.applyFilters(musicals, searchFilters)
      ));
      
    filteredMusicals.subscribe(musicals => {
      this.musicals.emit(musicals);
    });
    this.searchForm.controls.searchName.setValue('');
  }

  private applyFilters(musicals: Musical[], filters): Musical[] {
    if (filters.searchName) {
      musicals = musicals.filter(musical => musical.hasName(filters.searchName));
    }
    if (filters.type) {
      musicals = musicals.filter(musical => musical.type.includes(filters.type));
    }
    if(filters.genre && this.albumFilter) {
      musicals = (musicals.filter(musical => musical.type === 'Album') as Album[])
                          .filter(album => album.genre && album.genre.includes(filters.genre));
    }
    return musicals;
  }

}
