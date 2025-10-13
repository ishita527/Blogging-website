import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHomepage } from './general-homepage';

describe('GeneralHomepage', () => {
  let component: GeneralHomepage;
  let fixture: ComponentFixture<GeneralHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
