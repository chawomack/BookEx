import { BookExchangePage } from './app.po';

describe('book-exchange App', function() {
  let page: BookExchangePage;

  beforeEach(() => {
    page = new BookExchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
