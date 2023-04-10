import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigrafComponent } from './minigraf.component';

describe('MinigrafComponent', () => {
  let component: MinigrafComponent;
  let fixture: ComponentFixture<MinigrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinigrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinigrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
