import { Deployment6Page } from './app.po';

describe('deployment6 App', function() {
  let page: Deployment6Page;

  beforeEach(() => {
    page = new Deployment6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
