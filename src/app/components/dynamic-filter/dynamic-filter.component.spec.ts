import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DynamicFilterComponent } from './dynamic-filter.component';
import { FilterCategory } from 'src/app/core/types/types';

describe('DynamicFilterComponent', () => {
  let component: DynamicFilterComponent;
  let fixture: ComponentFixture<DynamicFilterComponent>;

  const mockCategories: FilterCategory[] = [
    { name: 'Category1', current: 'Option1', values: ['Option1', 'Option2', 'Option3'] },
    { name: 'Category2', current: 'Option2', values: ['OptionA', 'OptionB'] },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ReactiveFormsModule, DynamicFilterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFilterComponent);
    component = fixture.componentInstance;
    component.categories = mockCategories;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with controls for each category', () => {
    component.ngOnInit();
    expect(component.filterForm.contains('Category1')).toBeTrue();
    expect(component.filterForm.contains('Category2')).toBeTrue();
    expect(component.filterForm.get('Category1')?.value).toBe('Option1');
    expect(component.filterForm.get('Category2')?.value).toBe('Option2');
  });

  it('should emit applyFilter event with the form values when apply is called', () => {
    spyOn(component.applyFilter, 'emit');
    component.ngOnInit();
    component.apply();
    expect(component.applyFilter.emit).toHaveBeenCalledWith(component.filterForm.value);
  });

  it('should emit null when clear is called', () => {
    spyOn(component.applyFilter, 'emit');
    component.clear();
    expect(component.filterForm.value).toEqual({ Category1: null, Category2: null });
    expect(component.applyFilter.emit).toHaveBeenCalledWith(null);
  });

  it('should reset the form to initial values after clear', () => {
    component.ngOnInit();
    component.clear();
    expect(component.filterForm.get('Category1')?.value).toBeNull();
    expect(component.filterForm.get('Category2')?.value).toBeNull();
  });
});
