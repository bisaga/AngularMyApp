import { AngularMyAppPage } from './app.po';

describe('angular-my-app App', () => {
  let page: AngularMyAppPage;

  beforeEach(() => {
    page = new AngularMyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
