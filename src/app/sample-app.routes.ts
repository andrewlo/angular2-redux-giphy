import { RouterConfig } from '@angular/router';
import { RioCounterPage, RioAboutPage, SearchPage, GifDetailsPage } from '../pages';

export const SAMPLE_APP_ROUTES: RouterConfig = [{
  pathMatch: 'full',
  path: '',
  redirectTo: 'search'
}, {
  path: 'search',
  component: SearchPage
}, {
  path: 'gif-details/:id',
  component: GifDetailsPage
}, {
  path: 'counter',
  component: RioCounterPage
}, {
  path: 'about',
  component: RioAboutPage
}];
