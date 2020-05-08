import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePerksComponent } from './page-perks.component';

describe('PagePerksComponent', () => {
  let component: PagePerksComponent;
  let fixture: ComponentFixture<PagePerksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePerksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
