import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanerosClaseComponentComponent } from './companeros-clase-component.component';

describe('CompanerosClaseComponentComponent', () => {
  let component: CompanerosClaseComponentComponent;
  let fixture: ComponentFixture<CompanerosClaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanerosClaseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanerosClaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
