import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarVideoComponent } from './side-bar-video.component';

describe('SideBarVideoComponent', () => {
  let component: SideBarVideoComponent;
  let fixture: ComponentFixture<SideBarVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
