import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Musical } from 'src/app/models/musical';
import { MusicalService } from 'src/app/services/musical.service';


@Component({
  selector: 'kenjo-musical-search',
  templateUrl: './musical-search.component.html',
  styleUrls: ['./musical-search.component.scss']
})
export class MusicalSearchComponent implements OnInit {
 
  @Output() musicals = new EventEmitter<Musical[]>();

  searchForm: FormGroup;
  showExtraFilters: boolean = false;

  constructor(private musicalService: MusicalService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchName: [''],
      type: ['Album']
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
      musicals = musicals.filter(musical => musical.name.toLowerCase().includes(filters.searchName.toLowerCase()));
    }
    if (filters.type) {
      musicals = musicals.filter(musical => musical.type.includes(filters.type));
    }
    return musicals;
  }

}
