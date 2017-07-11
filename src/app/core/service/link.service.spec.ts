import {inject, TestBed} from '@angular/core/testing';

import {LinkService} from './link.service';
import {Bike} from '../model/bike.interface';


describe('LinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkService]
    });
  });

  it('should be created', inject([LinkService], (service: LinkService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getLink(bike: Bike)', () => {

    it('should return the correct link', inject([LinkService], (service: LinkService) => {
      expect(service.getQueryString(getBike())).toEqual('?wheel-diameter=17&chainrings=[54,50]&cogs=[28,23,19,16,13,11,9]');
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
