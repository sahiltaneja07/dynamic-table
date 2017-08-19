import { Inc42Page } from './app.po';

describe('inc42 App', () => {
  let page: Inc42Page;

  beforeEach(() => {
    page = new Inc42Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
