import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanerosListComponent } from './companeros-list.component';

describe('CompanerosListComponent', () => {
  let component: CompanerosListComponent;
  let fixture: ComponentFixture<CompanerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanerosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
