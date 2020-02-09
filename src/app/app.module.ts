import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { GetAllStockComponent } from './get-all-stock/get-all-stock.component';
import { GetAllCompanyComponent } from './get-all-company/get-all-company.component';
import { GetAllInvestorComponent } from './get-all-investor/get-all-investor.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AddInvestorComponent } from './add-investor/add-investor.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { GetallbyManagerComponent } from './getallby-manager/getallby-manager.component';
import { GetallbyInvestorComponent } from './getallby-investor/getallby-investor.component';
import { GetallbyTransactionComponent } from './getallby-transaction/getallby-transaction.component';
import { ModifyCompanyComponent } from './modify-company/modify-company.component';
import { ModifyManagerComponent } from './modify-manager/modify-manager.component';
import { ModifyInvestorComponent } from './modify-investor/modify-investor.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ModifyStockComponent } from './modify-stock/modify-stock.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { BuystockComponent } from './buystock/buystock.component';
import { SellstockComponent } from './sellstock/sellstock.component';
import { GetallstocksComponent } from './getallstocks/getallstocks.component';
import { StocksOfInvestorComponent } from './stocks-of-investor/stocks-of-investor.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ManagerAddComponent } from './manager-add/manager-add.component';
import { ViewProfileOfManagerComponent } from './view-profile-of-manager/view-profile-of-manager.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { CreateInvestorComponent } from './create-investor/create-investor.component';
import { SetMaxstockComponent } from './set-maxstock/set-maxstock.component';
import { ModifyMaxStockComponent } from './modify-max-stock/modify-max-stock.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    AddManagerComponent,
    AddCompanyComponent,
    AdminLoginComponent,
    GetAllStockComponent,
    GetAllCompanyComponent,
    GetAllInvestorComponent,
    AddInvestorComponent,
    AddStockComponent,
    GetallbyManagerComponent,
    GetallbyInvestorComponent,
    GetallbyTransactionComponent,
    ModifyCompanyComponent,
    ModifyManagerComponent,
    ModifyInvestorComponent,
    ManagerProfileComponent,
    ModifyStockComponent,
    StockexchangeComponent,
    BuystockComponent,
    SellstockComponent,
    GetallstocksComponent,
    StocksOfInvestorComponent,
    ViewProfileComponent,
    ManagerAddComponent,
    ViewProfileOfManagerComponent,
    CreateManagerComponent,
    CreateInvestorComponent,
    SetMaxstockComponent,
    ModifyMaxStockComponent,
    ChangePasswordComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,

    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
