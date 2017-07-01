import Utils from '../utils/utils';

describe('Utils', () => {

  describe('#getGearInches(wheelDiameter, chainringTeeth, cogTeeth)', () => {

    it('should return the correct calculation', () => {
      expect(Utils.getGearInches(10, 60, 10)).toEqual(60);
      expect(Utils.getGearInches(10, 60, 1)).toEqual(600);
      expect(Utils.getGearInches(1, 60, 1)).toEqual(60);
      expect(Utils.getGearInches(10, 50, 10)).toEqual(50);
      expect(Utils.getGearInches(10, 50, 1)).toEqual(500);
      expect(Utils.getGearInches(1, 50, 1)).toEqual(50);
    });

  });

});

