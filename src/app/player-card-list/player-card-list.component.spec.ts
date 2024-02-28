import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardListComponent } from './player-card-list.component';

describe('PlayerCardListComponent', () => {
  let component: PlayerCardListComponent;
  let fixture: ComponentFixture<PlayerCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
