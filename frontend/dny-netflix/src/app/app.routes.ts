import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];