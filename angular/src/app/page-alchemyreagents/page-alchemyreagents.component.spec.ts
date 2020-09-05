import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlchemyReagentsComponent } from './page-alchemyreagents.component';

describe('PageAlchemyReagentsComponent', () => {
  let component: PageAlchemyReagentsComponent;
  let fixture: ComponentFixture<PageAlchemyReagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlchemyReagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlchemyReagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
