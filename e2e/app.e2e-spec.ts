import { AppPage } from './app.po';

describe('angular4-base App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should home-page message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home-page works!');
  });
});
