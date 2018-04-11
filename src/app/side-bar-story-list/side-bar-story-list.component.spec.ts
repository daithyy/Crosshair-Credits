import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarStoryListComponent } from './side-bar-story-list.component';

describe('SideBarStoryListComponent', () => {
  let component: SideBarStoryListComponent;
  let fixture: ComponentFixture<SideBarStoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarStoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarStoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
