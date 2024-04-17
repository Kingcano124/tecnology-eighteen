import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenasComponentComponent } from './resenas-component.component';

describe('ResenasComponentComponent', () => {
  let component: ResenasComponentComponent;
  let fixture: ComponentFixture<ResenasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResenasComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
