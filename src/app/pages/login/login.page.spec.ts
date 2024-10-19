import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Actions } from '@ngrx/effects';
import { Subject } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store, Actions, { provide: ScannedActionsSubject, useValue: new Subject() }],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
