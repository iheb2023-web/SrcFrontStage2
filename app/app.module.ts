import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdectComponent } from './prodect/prodect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {HttpClientModule} from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component'
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HiverComponent } from './hiver/hiver.component';
import { PrintempsComponent } from './printemps/printemps.component';
import { HeteComponent } from './hete/hete.component';
import { AutomneComponent } from './automne/automne.component';
import { InsertProdectComponent } from './insert-prodect/insert-prodect.component';
import { UpdateProdectComponent } from './update-prodect/update-prodect.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SearchProdComponent } from './search-prod/search-prod.component';
import { RegistreFormComponent } from './registre-form/registre-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { CartComponent } from './cart/cart.component';
import { DetailsProdectComponent } from './details-prodect/details-prodect.component';
import { CmdListComponent } from './cmd-list/cmd-list.component';
import { ConnectAdminComponent } from './connect-admin/connect-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent,
    ProdectComponent,
    ForbiddenComponent,
    ConnectHttpComponent,
    FooterComponent,
    ContactComponent,
    HiverComponent,
    PrintempsComponent,
    HeteComponent,
    AutomneComponent,
    InsertProdectComponent,
    UpdateProdectComponent,
    ProductListComponent,
    ContactListComponent,
    SearchProdComponent,
    RegistreFormComponent,
    UserListComponent,
    UpdateUserComponent,
    InsertUserComponent,
    CartComponent,
    DetailsProdectComponent,
    CmdListComponent,
    ConnectAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
