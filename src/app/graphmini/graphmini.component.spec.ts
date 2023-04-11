import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphminiComponent } from './graphmini.component';

describe('GraphminiComponent', () => {
  let component: GraphminiComponent;
  let fixture: ComponentFixture<GraphminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphminiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
