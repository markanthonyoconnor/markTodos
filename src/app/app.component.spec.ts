import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it(`should have as title 'angular-template'`, () => {
    expect(fixture.title).toEqual('angular-template');
  });
});
