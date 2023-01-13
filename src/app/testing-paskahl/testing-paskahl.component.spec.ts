import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPaskahlComponent } from './testing-paskahl.component';

describe('TestingPaskahlComponent', () => {
  let component: TestingPaskahlComponent;
  let fixture: ComponentFixture<TestingPaskahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingPaskahlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingPaskahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
