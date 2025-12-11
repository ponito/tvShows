import {MainView} from './components/main-view/main-view.component';
import {Routes} from '@angular/router';
import {ShowAdvancedDetails} from './components/show-advanced-details/show-advanced-details';

const routeConfig: Routes = [
  {
    path: '',
    component: MainView,
    title: 'TV Series',
  },
  {
    path: 'details/:title',
    component: ShowAdvancedDetails,
    title: 'Details',
  },
];
export default routeConfig;
