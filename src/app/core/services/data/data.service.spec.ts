import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';


describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert params to query string', () => {
    const params = {
      name: 'John',
      age: 30,
    };
    const queryString = service.convertParamsToQueryString(params);
    expect(queryString).toBe('name=John&age=30');
  });

  it('should convert empty params to query string', () => {
    const params = {};
    const queryString = service.convertParamsToQueryString(params);
    expect(queryString).toBe('');
  });
});
