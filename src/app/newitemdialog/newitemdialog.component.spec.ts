import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewitemdialogComponent } from './newitemdialog.component';

describe('NewitemdialogComponent', () => {
  let component: NewitemdialogComponent;
  let fixture: ComponentFixture<NewitemdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewitemdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewitemdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
