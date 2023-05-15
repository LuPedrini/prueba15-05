import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasskillsComponent } from './barrasskills.component';

describe('BarrasskillsComponent', () => {
  let component: BarrasskillsComponent;
  let fixture: ComponentFixture<BarrasskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
