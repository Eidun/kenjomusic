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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicalListComponent,
    MusicalSearchComponent,
    MusicalComponent,
    FooterComponent,
    MusicalModalComponent
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
