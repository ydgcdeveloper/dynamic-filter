import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { DataService } from '../../core/services/data/data.service';
import { DataStoreService } from '../../store/data/data-store.service';
import { DynamicFilterComponent } from '../../components/dynamic-filter/dynamic-filter.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        DataStoreService,
        { provide: Store, useValue: { select: () => of(), dispatch: () => {} } }
      ],
    });
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
