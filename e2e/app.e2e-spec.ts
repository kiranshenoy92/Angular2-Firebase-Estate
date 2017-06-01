import { FirebaseEstatePage } from './app.po';

describe('firebase-estate App', function() {
  let page: FirebaseEstatePage;

  beforeEach(() => {
    page = new FirebaseEstatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
