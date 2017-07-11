import {inject, TestBed} from '@angular/core/testing';

import {GearInchMapService} from './gear.inch.map.service';
import {Bike} from 'app/core/model/bike.interface';
import {CalculateService} from './calculate.service';

describe('GearInchMapServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GearInchMapService, CalculateService]
    });
  });

  it('should be created', inject([GearInchMapService], (service: GearInchMapService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getGearInchesMap(bike)', () => {

    it('should return an empty map by default', inject([GearInchMapService], (service: GearInchMapService) => {
      expect(service.getGearInchesMap(getEmptyBike())).toEqual({});
    }));

    function getEmptyBike(): Bike {
      return {
        wheel: null,
        chainrings: null,
        cogs: null
      };
    }

    it('should return the correct number of chainrings', inject([GearInchMapService], (service: GearInchMapService) => {
      const bike = getBike();
      const gearInchesMap = service.getGearInchesMap(bike);
      expect(Object.keys(gearInchesMap).length).toEqual(bike.chainrings.length);
    }));

    it('should return the correct number of cogs', inject([GearInchMapService], (service: GearInchMapService) => {
      const bike = getBike();
      const gearInchesMap = service.getGearInchesMap(bike);
      Object.keys(gearInchesMap).forEach(k => {
        expect(Object.keys(gearInchesMap[k]).length).toEqual(bike.cogs.length);
      });
    }));

    it('should return correct gear inch calculations', inject([GearInchMapService,], (service: GearInchMapService, calculateService: CalculateService) => {
      const bike = getBike();
      const gearInchesMap = service.getGearInchesMap(bike);
      for (const chainringId of gearInchesMap) {
        for (const cogId of gearInchesMap[chainringId]) {
          const gearInches = gearInchesMap[chainringId][cogId];
          const gearInchesCalc = calculateService.getGearInches(
            bike.wheel.diameter,
            bike.chainrings.find(c => c.id === chainringId).teeth,
            bike.cogs.find(c => c.id === cogId).teeth
          );
          expect(gearInches).toEqual(gearInchesCalc);
        }
      }
    }));

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
    }

  });

});
