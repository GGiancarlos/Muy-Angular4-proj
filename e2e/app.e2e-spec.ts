import { MyAngularProjectPage } from './app.po';

describe('my-angular-project App', () => {
  let page: MyAngularProjectPage;

  beforeEach(() => {
    page = new MyAngularProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to My First Angular App!!'))
      .then(done, done.fail);
  });
});
