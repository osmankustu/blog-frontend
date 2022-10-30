import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './Components/article-details/article-details.component';



import { ArticleComponent } from './Components/article/article.component';
import { CommentComponent } from './Components/comment/comment.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes = [
{path:"", component:ArticleComponent},
{path:"articles", component:ArticleComponent},
{path:"articles/articledetails/:articleId", component:ArticleDetailsComponent},
{path:"articles/category/:categoryId", component:ArticleComponent},
{path:"article/articledetails/:articleId/comment",component:CommentComponent ,canActivate:[LoginGuard]},
{path:"Login", component:LoginComponent},


]



;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
