import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestModule } from 'src/app/app.test.module';

import { MusicalSearchComponent } from './musical-search.component';

describe('MusicalSearchComponent', () => {
  let component: MusicalSearchComponent;
  let fixture: ComponentFixture<MusicalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ MusicalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
