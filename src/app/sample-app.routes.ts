import { RouterConfig } from '@angular/router';
import { RioCounterPage, RioAboutPage, SearchPage } from '../pages';

export const SAMPLE_APP_ROUTES: RouterConfig = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'search'
}, {
  path: 'search',
  component: SearchPage
}, {
  path: 'counter',
  component: RioCounterPage
}, {
  path: 'about',
  component: RioAboutPage
}];
