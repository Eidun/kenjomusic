import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MusicalListComponent } from './components/musical-list/musical-list.component';
import { MusicalSearchComponent } from './components/musical-search/musical-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MusicalComponent } from './components/musical/musical.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicalModalComponent } from './components/musical-modal/musical-modal.component';
import { AlbumModalComponent } from './components/album-modal/album-modal.component';
import { MusicalModalFooterComponent } from './components/musical-modal-footer/musical-modal-footer.component';
import { ArtistModalComponent } from './components/artist-modal/artist-modal.component';
import { SegmentModalComponent } from './components/segment-modal/segment-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicalListComponent,
    MusicalSearchComponent,
    MusicalComponent,
    FooterComponent,
    MusicalModalComponent,
    AlbumModalComponent,
    MusicalModalFooterComponent,
    ArtistModalComponent,
    SegmentModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
