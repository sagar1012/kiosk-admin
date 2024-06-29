// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        canActivate: [AuthGuard],
        loadComponent: () => import('./demo/dashboard/dash-analytics.component')
      },
      {
        path: 'component',
        canActivate: [AuthGuard],
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadComponent: () => import('./demo/chart & map/core-apex.component')
      },
      {
        path: 'advantage',
        canActivate: [AuthGuard],
        loadComponent: () => import('./demo/forms & tables/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        canActivate: [AuthGuard],
        loadComponent: () => import('./demo/forms & tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'jobs',
        canActivate: [AuthGuard],
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      },
      {
        path: 'job-applications',
        canActivate: [AuthGuard],
        loadComponent: () => import('./demo/job-applications/job-applications.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
