import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAddComponent } from './Components/article-add/article-add.component';
import { ArticleComponent } from './Components/article/article.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes = [
{path:"",pathMatch:"full", component:ArticleComponent},
{path:"articles", component:ArticleComponent},
{path:"articles/category/:categoryId", component:ArticleComponent},
{path:"articles/add", component:ArticleAddComponent, canActivate:[LoginGuard]},
{path:"Login", component:LoginComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
