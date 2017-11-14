import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ReviewContractComponent } from './review-contract/review-contract.component';

import { AdminComponent } from './adminpage/admin/admin.component';
import { DeployContractsComponent } from './adminpage/deploy-contracts/deploy-contracts.component';
import { PendingContractsComponent } from './adminpage/pending-contracts/pending-contracts.component';

import { MyContractsComponent } from './my-contracts/my-contracts.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

import { ContractPreviewComponent } from './contract-preview/contract-preview.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard', // potentially add user url param
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          {
            path: 'my-contracts',
            component: MyContractsComponent
          },
          {
            path: 'contract-details/:contract-nickname',
            component: ContractDetailsComponent
          },
          {
            path: 'create-contract',
            component: ContractFormComponent
          },
          {
            path: 'review-contract',
            component: ReviewContractComponent
          },
          {
            path: '',
            redirectTo: 'my-contracts', pathMatch: 'full'
          },
          /* @@Admin SubPage@@ */
          {
            path: 'admin',
            component: AdminComponent,
            data: { someShizz: 'some interesting data' },
            children: [
              {
                path: '',
                children: [
                  {
                    path: 'deploy/:contract-id',
                    component: DeployContractsComponent
                  },
                  {
                    path: 'pending',
                    component: PendingContractsComponent
                  }
                ]
              }
            ]
          },
        ]
      },
    ]
  },


  {
    path: '**',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // enablingTracing: false
      
      { useHash: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
