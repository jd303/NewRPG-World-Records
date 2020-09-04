import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlchemyComponent } from './page-alchemy.component';

describe('PageSpellEffectsComponent', () => {
  let component: PageAlchemyComponent;
  let fixture: ComponentFixture<PageAlchemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlchemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlchemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
