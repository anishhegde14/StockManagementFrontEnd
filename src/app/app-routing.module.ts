import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { GetAllCompanyComponent } from './get-all-company/get-all-company.component';
import { GetAllInvestorComponent } from './get-all-investor/get-all-investor.component';
import { GetAllStockComponent } from './get-all-stock/get-all-stock.component';
import { AddInvestorComponent } from './add-investor/add-investor.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { GetallbyManagerComponent } from './getallby-manager/getallby-manager.component';
import { GetallbyTransactionComponent } from './getallby-transaction/getallby-transaction.component';
import { GetallbyInvestorComponent } from './getallby-investor/getallby-investor.component';
import { ModifyCompanyComponent } from './modify-company/modify-company.component';
import { ModifyInvestorComponent } from './modify-investor/modify-investor.component';
import { ModifyManagerComponent } from './modify-manager/modify-manager.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ModifyStockComponent } from './modify-stock/modify-stock.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { BuystockComponent } from './buystock/buystock.component';
import { SellstockComponent } from './sellstock/sellstock.component';
import { GetallstocksComponent } from './getallstocks/getallstocks.component';
import { StocksOfInvestorComponent } from './stocks-of-investor/stocks-of-investor.component';
import { AuthGaurd } from 'src/app/auth.guard';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ManagerAddComponent } from './manager-add/manager-add.component';
import { ViewProfileOfManagerComponent } from './view-profile-of-manager/view-profile-of-manager.component';
import { CreateInvestorComponent } from './create-investor/create-investor.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { SetMaxstockComponent } from './set-maxstock/set-maxstock.component';
import { ModifyMaxStockComponent } from './modify-max-stock/modify-max-stock.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';


const routes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'header', component: HeaderComponent},
      {path : 'buyStock', component : BuystockComponent},
      {path : 'sellStock', component : SellstockComponent},
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contactus', component: ContactusComponent},
      {path: 'add-manager', component: AddManagerComponent ,canActivate: [AuthGaurd], data: {
        expectedRoles: ['admin']}},
      {path: 'addCompany', component: AddCompanyComponent ,canActivate: [AuthGaurd], data: {
        expectedRoles: ['admin']}},
      {path: 'addStock', component: AddStockComponent,canActivate: [AuthGaurd], data: {
        expectedRoles: ['manager']}},
      {path: 'add-investor', component: AddInvestorComponent},
      {path: 'create-investor', component: CreateInvestorComponent},
      {path: 'create-manager', component: CreateManagerComponent},
      {path: 'admin-login', component: AdminLoginComponent},
      {path: 'get-all-company', component: GetAllCompanyComponent,canActivate: [AuthGaurd], data: {
        expectedRoles: ['admin']}},
      {path: 'getAllStocks', component: GetAllStockComponent},
      {path: 'get-all-investor', component: GetAllInvestorComponent,canActivate: [AuthGaurd], data: {
        expectedRoles: ['investor']}},
      {path: 'getallby-investor', component: GetallbyInvestorComponent},
      {path: 'getallby-transaction', component: GetallbyTransactionComponent},
      {path: 'getallby-manager', component: GetallbyManagerComponent},
      {path: 'modify-company', component: ModifyCompanyComponent},
      {path: 'modify-investor/:id', component: ModifyInvestorComponent},
      {path: 'modify-manager/:id', component: ModifyManagerComponent},
      {path: 'updateStock/:id', component: ModifyStockComponent},
      {path : 'stockexchange', component : StockexchangeComponent},
      {path: 'manager-profile', component: ManagerProfileComponent,canActivate: [AuthGaurd], data: {
        expectedRoles: ['admin']}},
      {path : 'get-all-stocks', component : GetallstocksComponent},
      {path : 'updatePassword', component : ChangePasswordComponent},
      {path : 'buystocks/:id', component : BuystockComponent},
      {path : 'getAllTransactionInvestor', component : StocksOfInvestorComponent},
      {path : 'sellStock/:id', component : SellstockComponent},
      {path : 'viewProfile',component: ViewProfileComponent},
      {path:'manager-add',component:ManagerAddComponent},
      {path: 'viewmprofile', component:ViewProfileOfManagerComponent},
      {path:'set-maxstock',component:SetMaxstockComponent},
      {path:'modify-max-stock/:id',component:ModifyMaxStockComponent},
      {path : 'getAllTransactionHistory', component : TransactionHistoryComponent,canActivate: [AuthGaurd], data: {
        expectedRoles: ['admin']}},
      {path : 'updatePassword',component : ChangePasswordComponent, canActivate: [AuthGaurd], data: {
        expectedRoles: ['admin','investor','manager']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
