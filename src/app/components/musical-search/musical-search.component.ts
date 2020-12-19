import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album, Genres } from 'src/app/models/album';
import { Musical } from 'src/app/models/musical';
import { MusicalService } from 'src/app/services/musical.service';
import { RefreshService } from 'src/app/services/refresh.service';

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

  musicalsSubscription: Subscription;

  constructor(
    private musicalService: MusicalService,
    private refreshService: RefreshService,
    private fb: FormBuilder
    ) {
    this.searchForm = this.fb.group({
      searchName: [''],
      type: [''],
      genre: ['']
    })
   }
  
  ngOnInit(): void {
    this.refreshService.waitRefresh().subscribe(() => this.loadMusicals());
    this.refreshService.refresh();
  }

  private loadMusicals() {
    if (this.musicalsSubscription) {
      this.musicalsSubscription.unsubscribe();
    }

    this.musicalsSubscription = combineLatest([this.musicalService.getMusicals(), this.searchForm.valueChanges])
      .pipe(map(([musicals, searchFilters]) => this.applyFilters(musicals, searchFilters)
      )).subscribe(musicals => {
        this.musicals.emit(musicals);
    });

    this.searchForm.controls.searchName.setValue(this.searchForm.value.searchName);
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
