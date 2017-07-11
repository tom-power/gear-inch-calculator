import {inject, TestBed} from '@angular/core/testing';

import {CalculateService} from './calculate.service';

describe('CalculateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateService]
    });
  });

  it('should be created', inject([CalculateService], (service: CalculateService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getGearInches(wheelDiameter: number, chainringTeeth: number, cogTeeth: number)', () => {

    it('should return the correct calculation', inject([CalculateService], (service: CalculateService) => {
      expect(service.getGearInches(10, 60, 10)).toEqual(60);
      expect(service.getGearInches(10, 60, 1)).toEqual(600);
      expect(service.getGearInches(1, 60, 1)).toEqual(60);
      expect(service.getGearInches(10, 50, 10)).toEqual(50);
      expect(service.getGearInches(10, 50, 1)).toEqual(500);
      expect(service.getGearInches(1, 50, 1)).toEqual(50);
    }));

  });

});
