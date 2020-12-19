import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { Musical } from 'src/app/models/musical';
import { MusicalModalComponent } from '../musical-modal/musical-modal.component';

@Component({
  selector: 'kenjo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private modalService: NgbModal, private configModal: NgbModalConfig) {
    // Prevents modal close on backdrop click
    this.configModal.backdrop = 'static';
  }

  createAlbum() {
    const album = new Album({});
    this.openModal(album);
  }

  createArtist() {
    const artist = new Artist({});
    this.openModal(artist);
  }

  private openModal(musical: Musical) {
    const modal = this.modalService.open(MusicalModalComponent);
    modal.componentInstance.musical = musical;
  }
}
