import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonFabButton, IonFab, NgIf],
})
export class PaginationComponent {
  @Input() showPrevious: boolean | null = true;
  @Input() showNext: boolean | null = true;

  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor() {
    addIcons({ arrowBackOutline, arrowForwardOutline });
  }

  prevPage() {
    this.previous.emit();
  }

  nextPage() {
    this.next.emit();
  }
}
