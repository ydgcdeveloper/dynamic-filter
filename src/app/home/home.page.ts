import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonButton,
  IonAvatar,
  IonButtons,
  IonInput,
  IonFabButton,
  IonIcon,
  IonFab,
  IonSearchbar,
  IonFooter,
  IonProgressBar, IonChip } from '@ionic/angular/standalone';
import { DynamicFilterComponent } from '../components/dynamic-filter/dynamic-filter.component';
import { AsyncPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { DataStoreService } from '../store/data/data-store.service';
import { Character, Pagination } from '../core/types/types';
import { DestroyComponent } from '../components/destroy/destroy.component';
import { Observable, takeUntil } from 'rxjs';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { CHARACTERS_CATEGORIES } from '../core/data/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonChip, 
    IonProgressBar,
    IonFooter,
    IonSearchbar,
    IonInput,
    IonButtons,
    IonAvatar,
    IonButton,
    IonListHeader,
    IonLabel,
    IonItem,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    DynamicFilterComponent,
    PaginationComponent,
    NgForOf,
    NgIf,
    AsyncPipe,
    TitleCasePipe,
  ],
})
export class HomePage extends DestroyComponent implements OnInit {
  characters$: Observable<Character[]> = this.dataStoreService.characters$;
  pagination$: Observable<Pagination> =
    this.dataStoreService.charactersPagination$;

  loading$: Observable<boolean> = this.dataStoreService.loadingCharacters$;

  characters: Character[] = [];
  pagination: Pagination | null = null;
  filteredCharacters: Character[] = [];

  categories = CHARACTERS_CATEGORIES;

  filter: any = null;

  constructor(private readonly dataStoreService: DataStoreService) {
    super();
  }

  ngOnInit() {
    this.loadCharacters({ page: 1 });

    this.characters$.pipe(takeUntil(this.destroy$)).subscribe((characters) => {
      this.characters = characters;
      this.filteredCharacters = characters;
    });

    this.pagination$.pipe(takeUntil(this.destroy$)).subscribe((pagination) => {
      this.pagination = pagination;
    });
  }

  loadCharacters(params: any) {
    if (this.filter) {
      params = { ...params, ...this.filter };
    }
    this.dataStoreService.loadCharacters(params);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  filterCharacters(event: any) {
    const value = event.target.value.toLowerCase();
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(value)
    );
  }

  nextPage() {
    if (!this.pagination?.next) return;
    let page = this.pagination.next.split('=')[1];
    if (page.includes('&')) {
      const index = page.indexOf('&');
      page = page.slice(0, index);
    }
    this.loadCharacters({ page });
  }

  prevPage() {
    if (!this.pagination?.prev) return;
    let page = this.pagination.prev.split('=')[1];
    if (page.includes('&')) {
      const index = page.indexOf('&');
      page = page.slice(0, index);
    }
    this.loadCharacters({ page });
  }

  applyFilter(event: any) {
    if (event) {
      const params = Object.entries(event).reduce((acc, [key, value]) => {
        return value ? { ...acc, [key]: value } : acc;
      }, {});
      this.filter = params;
    } else {
      this.filter = null;
    }
    this.loadCharacters({ page: 1 });
  }

  isCategoryInFilter(category: string) {
    return this.filter && this.filter[category];
  }
}
