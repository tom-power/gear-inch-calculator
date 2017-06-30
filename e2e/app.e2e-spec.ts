import { GearInchCalculatorPage } from './app.po';

describe('gear-inch-calculator App', () => {
  let page: GearInchCalculatorPage;

  beforeEach(() => {
    page = new GearInchCalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
