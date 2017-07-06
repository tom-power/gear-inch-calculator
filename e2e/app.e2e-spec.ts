import { GearInchCalculatorPage } from './app.po';

describe('gear-inch-calculator-angular App', () => {
  let page: GearInchCalculatorPage;

  beforeEach(() => {
    page = new GearInchCalculatorPage();
  });

  it('should have correct paragraph text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Gear inch calculator');
  });
});
