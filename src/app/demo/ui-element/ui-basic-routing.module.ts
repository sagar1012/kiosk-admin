import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () => import('./badge/badge.component')
      },
      {
        path: 'menu-detail/:id',
        loadComponent: () => import('./button/button.component')
      },
      {
        path: 'menu-detail',
        loadComponent: () => import('./button/button.component')
      }
      // {
      //   path: 'impact-insights',
      //   loadComponent: () => import('./breadcrumb/breadcrumb.component')
      // },
      // {
      //   path: 'career',
      //   loadComponent: () => import('./collapse/collapse.component')
      // },
      // {
      //   path: 'tabs-pills',
      //   loadComponent: () => import('./tabs-pills/tabs-pills.component')
      // },
      // {
      //   path: 'typography',
      //   loadComponent: () => import('./typography/typography.component')
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }
