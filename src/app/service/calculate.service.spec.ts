import {inject, TestBed} from '@angular/core/testing';

import {CalculateService} from './calculate.service';
import Utils from '../utils/utils';
import {Bike} from 'app/model/bike.interface';

describe('CalculateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateService]
    });
  });

  it('should be created', inject([CalculateService], (service: CalculateService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getGearInchesMap(bike)', () => {

    it('should return an empty map by default', inject([CalculateService], (service: CalculateService) => {
      expect(service.getGearInchesMap(getEmptyBike())).toEqual({});
    }));

    it('should return the correct number of chainrings', inject([CalculateService], (service: CalculateService) => {
      const bike = getBike();
      const gearInchesMap = service.getGearInchesMap(bike);
      expect(Object.keys(gearInchesMap).length).toEqual(bike.chainrings.length);
    }));

    it('should return the correct number of cogs', inject([CalculateService], (service: CalculateService) => {
      const bike = getBike();
      const gearInchesMap = service.getGearInchesMap(bike);
      Object.keys(gearInchesMap).forEach(k => {
        expect(Object.keys(gearInchesMap[k]).length).toEqual(bike.cogs.length);
      });
    }));

    it('should return correct gear inch calculations', inject([CalculateService], (service: CalculateService) => {
      const bike = getBike();
      const gearInchesMap = service.getGearInchesMap(bike);
      for (let chainringId of gearInchesMap) {
        for (let cogId of gearInchesMap[chainringId]) {
          let gearInches = gearInchesMap[chainringId][cogId];
          let gearInchesCalc = Utils.getGearInches(
            bike.wheel.diameter,
            bike.chainrings.find(c => c.id == chainringId).teeth,
            bike.cogs.find(c => c.id == cogId).teeth
          );
          expect(gearInches).toEqual(gearInchesCalc);
        }
      }
    }));
  });

});

function getEmptyBike(): Bike {
  return {
    wheel: null,
    chainrings: null,
    cogs: null
  };
};

function getBike(): Bike {
  return {
    wheel: {diameter: 17},
    chainrings: [
      {id: 1, teeth: 54},
      {id: 2, teeth: 50}
    ],
    cogs: [
      {id: 1, teeth: 28},
      {id: 2, teeth: 23},
      {id: 3, teeth: 19},
      {id: 4, teeth: 16},
      {id: 5, teeth: 13},
      {id: 6, teeth: 11},
      {id: 7, teeth: 9}
    ]
  };
};
