import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePsionicEffectsComponent } from './page-psioniceffects.component';

describe('PagePsionicEffectsComponent', () => {
  let component: PagePsionicEffectsComponent;
  let fixture: ComponentFixture<PagePsionicEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePsionicEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePsionicEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
