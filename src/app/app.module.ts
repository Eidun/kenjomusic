import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModalComponent } from './components/album-modal/album-modal.component';
import { ArtistModalComponent } from './components/artist-modal/artist-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MusicalListComponent } from './components/musical-list/musical-list.component';
import { MusicalModalFooterComponent } from './components/musical-modal-footer/musical-modal-footer.component';
import { MusicalModalComponent } from './components/musical-modal/musical-modal.component';
import { MusicalSearchComponent } from './components/musical-search/musical-search.component';
import { MusicalComponent } from './components/musical/musical.component';
import { SegmentModalComponent } from './components/segment-modal/segment-modal.component';


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
