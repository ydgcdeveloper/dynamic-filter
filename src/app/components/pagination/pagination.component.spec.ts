import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), PaginationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit previous event when prevPage is called', () => {
    spyOn(component.previous, 'emit');
    component.prevPage();
    expect(component.previous.emit).toHaveBeenCalled();
  });

  it('should emit next event when nextPage is called', () => {
    spyOn(component.next, 'emit');
    component.nextPage();
    expect(component.next.emit).toHaveBeenCalled();
  });

  it('should show previous button when showPrevious is true', () => {
    component.showPrevious = true;
    fixture.detectChanges();
    const previousButton = fixture.nativeElement.querySelector('ion-fab[horizontal="start"]');
    expect(previousButton).toBeTruthy();
  });

  it('should not show previous button when showPrevious is false', () => {
    component.showPrevious = false;
    fixture.detectChanges();
    const previousButton = fixture.nativeElement.querySelector('ion-fab[horizontal="start"]');
    expect(previousButton).toBeFalsy();
  });

  it('should show next button when showNext is true', () => {
    component.showNext = true;
    fixture.detectChanges();
    const nextButton = fixture.nativeElement.querySelector('ion-fab[horizontal="end"]');
    expect(nextButton).toBeTruthy();
  });

  it('should not show next button when showNext is false', () => {
    component.showNext = false;
    fixture.detectChanges();
    const nextButton = fixture.nativeElement.querySelector('ion-fab[horizontal="end"]');
    expect(nextButton).toBeFalsy();
  });
});
