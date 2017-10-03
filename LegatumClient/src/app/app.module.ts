import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { MyContractsComponent } from './my-contracts/my-contracts.component';
import { ContractPreviewComponent } from './contract-preview/contract-preview.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { CoreModule } from './component-modules/core/core.module';
import { SharedModule } from './component-modules/shared/shared.module';
import { ParticlesModule } from 'angular-particle';
import { MnFullpageModule } from 'ngx-fullpage';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ParticlesService } from './services/particles.service';
import { ReviewContractComponent } from './review-contract/review-contract.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './adminpage/admin/admin.component';
import { PendingContractsComponent } from './adminpage/pending-contracts/pending-contracts.component';
import { DeployContractsComponent } from './adminpage/deploy-contracts/deploy-contracts.component';
import { PendingContractIndividualComponent } from './adminpage/pending-contract-individual/pending-contract-individual.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContractFormComponent,
    MyContractsComponent,
    ContractPreviewComponent,
    LoginComponent,
    ReviewContractComponent,
    RegisterComponent,
    AdminComponent,
    PendingContractsComponent,
    DeployContractsComponent,
    PendingContractIndividualComponent,
    ContractDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    CommonModule,
    ParticlesModule,
    MnFullpageModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [AuthGuardService, AuthService, AngularFireAuth, LoginComponent, RegisterComponent,
    ParticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
