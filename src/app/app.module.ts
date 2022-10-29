import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './Components/navi/navi.component';
import { LoginComponent } from './Components/login/login.component';
import { CategoryComponent } from './Components/category/category.component';
import { ArticleAddComponent } from './Components/article-add/article-add.component';
import { ArticleComponent } from './Components/article/article.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AuthInterceptor } from './İnterceptors/auth.interceptor';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { AdminComponent } from './Components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LoginComponent,
    CategoryComponent,
    ArticleAddComponent,
    ArticleComponent,
    FilterPipePipe,
    VatAddedPipe,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
