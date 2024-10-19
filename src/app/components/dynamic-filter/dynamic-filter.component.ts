import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IonModal,
  IonHeader,
  IonButtons,
  IonContent,
  IonToolbar,
  IonFooter,
  IonTitle,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { FilterCategory } from 'src/app/core/types/types';

@Component({
  selector: 'app-dynamic-filter',
  templateUrl: './dynamic-filter.component.html',
  styleUrls: ['./dynamic-filter.component.scss'],
  standalone: true,
  imports: [IonIcon, IonFabButton, IonFab, 
    IonLabel,
    IonItem,
    IonList,
    IonButton,
    IonTitle,
    IonFooter,
    IonToolbar,
    IonContent,
    IonHeader,
    IonButtons,
    IonModal,
    IonSelect,
    IonSelectOption,
    ReactiveFormsModule,
    TitleCasePipe,
    NgFor,
  ],
})
export class DynamicFilterComponent implements OnInit {

  @Input() title: any = 'Filter';
  @Input() triggerId: any;
  @Input() categories: FilterCategory[] = [];

  @Output() applyFilter = new EventEmitter<any>();

  filterForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.filterForm = this.fb.group({});
    this.categories.forEach((category) => {
      this.filterForm?.addControl(
        category.name,
        this.fb.control(category.current)
      );
    });
  }

  apply() {
    this.applyFilter.emit(this.filterForm.value);
  }

  clear() {
    this.filterForm.reset();
    this.applyFilter.emit(null);
  }
}
