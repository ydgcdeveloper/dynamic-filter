import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DynamicFilterComponent } from './dynamic-filter.component';

describe('DynamicFilterComponent', () => {
  let component: DynamicFilterComponent;
  let fixture: ComponentFixture<DynamicFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), DynamicFilterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
