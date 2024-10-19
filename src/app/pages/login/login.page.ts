import { Actions, ofType } from '@ngrx/effects';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonItem, IonInput, IonInputPasswordToggle, IonButton } from '@ionic/angular/standalone';
import { DataStoreService } from 'src/app/store/data/data-store.service';
import { DestroyComponent } from 'src/app/components/destroy/destroy.component';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { loginFailure, loginSuccess } from 'src/app/store/data';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonInputPasswordToggle
  ],
})
export class LoginPage extends DestroyComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly dataStoreService: DataStoreService,
    private readonly common: CommonService,
    private readonly auth: AuthService,
    private actions$: Actions,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.listenActions();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('emilys', Validators.required),
      password: new FormControl('emilyspass', Validators.required),
    });
  }

  listenActions() {
    this.actions$
      .pipe(ofType(loginSuccess), takeUntil(this.destroy$))
      .subscribe((res) => {
        if (res?.data) {
          this.auth.setAuthenticatedUser(res.data);
          this.router.navigate(['/home']);
        }
      });

    this.actions$
      .pipe(ofType(loginFailure), takeUntil(this.destroy$))
      .subscribe((res) => {
        if (res?.error?.error?.message) {
          this.common.presentErrorToast(res?.error?.error?.message)
        }
      });
  }

  submit() {
    if (this.loginForm.valid) {
      this.dataStoreService.login(this.loginForm.value);
    }
  }
}
