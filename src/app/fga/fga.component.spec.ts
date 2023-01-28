import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgaComponent } from './fga.component';

describe('FgaComponent', () => {
  let component: FgaComponent;
  let fixture: ComponentFixture<FgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
