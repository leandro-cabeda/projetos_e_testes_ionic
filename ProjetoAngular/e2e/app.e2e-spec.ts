import { ProjetoAngularPage } from './app.po';

describe('projeto-angular App', function() {
  let page: ProjetoAngularPage;

  beforeEach(() => {
    page = new ProjetoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
