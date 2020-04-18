import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { CasService} from './cas.service';
import { CasListComponent } from './cas-list/cas-list.component';
import {RouterModule, Routes} from '@angular/router';
import { CasDetailComponent } from './cas-detail/cas-detail.component';


const appRoutes: Routes = [
  { path: 'casList', component: CasListComponent },
  { path: 'casDetail/:id', component: CasDetailComponent }
];


// @ts-ignore
@NgModule({
  declarations: [AppComponent, CasListComponent, CasDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes) , FormsModule, HttpClientModule,Ng2SearchPipeModule,NgxPaginationModule],
  providers: [CasService],
  bootstrap: [AppComponent]
})

export class AppModule {}
