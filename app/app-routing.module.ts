import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProdectComponent } from './prodect/prodect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { articletGuard } from './guard/article.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
import { ContactComponent } from './contact/contact.component';
import { AutomneComponent } from './automne/automne.component';
import { HiverComponent } from './hiver/hiver.component';
import { HeteComponent } from './hete/hete.component';
import { PrintempsComponent } from './printemps/printemps.component';
import { InsertProdectComponent } from './insert-prodect/insert-prodect.component';
import { UpdateProdectComponent } from './update-prodect/update-prodect.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RegistreFormComponent } from './registre-form/registre-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './guard/auth.guard';
import { DetailsProdectComponent } from './details-prodect/details-prodect.component';
import { CmdListComponent } from './cmd-list/cmd-list.component';
import { ConnectAdminComponent } from './connect-admin/connect-admin.component';
import { InsertUserComponent } from './insert-user/insert-user.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:"connecter",component: ConnectHttpComponent},
  {path:"dashboard",component:DashboardComponent,canActivate: [authGuard]},
  {path:'prodect',component:ProdectComponent},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"contact", component:ContactComponent},
  {path:"automne",component:AutomneComponent},
  {path:"hiver",component:HiverComponent},
  {path:"hete",component:HeteComponent},
  {path:"printemps",component:PrintempsComponent},
  {path:"insertProdect",component:InsertProdectComponent,/*canActivate: [authGuard]*/},
  {path:"UpdateProdect/:id", component:UpdateProdectComponent,/*canActivate: [authGuard]*/},
  {path:"liste",component:ProductListComponent,/*canActivate: [authGuard]*/},
{path:"listeRec",component:ContactListComponent,/*canActivate: [authGuard]*/},
  {path:"inscription",component:RegistreFormComponent},
  {path:"listeUser", component: UserListComponent,/*canActivate: [authGuard]*/},
  {path:"UpdateUser/:id", component:  UpdateUserComponent,/*canActivate: [authGuard]*/},
  {path:"panier", component:CartComponent},
  {path:"details/:id", component:DetailsProdectComponent},
  {path:"listCmd",component:CmdListComponent,/*canActivate: [authGuard]*/},
  {path:"admin",component:ConnectAdminComponent},
  {path:"insertUser",component:InsertUserComponent,canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
