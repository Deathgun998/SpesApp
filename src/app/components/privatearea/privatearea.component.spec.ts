import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateareaComponent } from './privatearea.component';

describe('PrivateareaComponent', () => {
  let component: PrivateareaComponent;
  let fixture: ComponentFixture<PrivateareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
