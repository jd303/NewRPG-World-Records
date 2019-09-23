import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpellEffectsComponent } from './page-main.component';

describe('PageSpellEffectsComponent', () => {
  let component: PageSpellEffectsComponent;
  let fixture: ComponentFixture<PageSpellEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSpellEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpellEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
