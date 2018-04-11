import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarStoryRowComponent } from './side-bar-story-row.component';

describe('SideBarStoryRowComponent', () => {
  let component: SideBarStoryRowComponent;
  let fixture: ComponentFixture<SideBarStoryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarStoryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarStoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
