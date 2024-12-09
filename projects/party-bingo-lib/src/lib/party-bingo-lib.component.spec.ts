import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyBingoLibComponent } from './party-bingo-lib.component';

describe('PartyBingoLibComponent', () => {
  let component: PartyBingoLibComponent;
  let fixture: ComponentFixture<PartyBingoLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyBingoLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyBingoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
