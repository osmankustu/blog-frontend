import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

 dataLoaded=false;
 article:Article
  constructor(private articleService:ArticleService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["articleId"]){
        this.getArticleDetails(params["articleId"]);
      }else{
        console.log("Sayfa Yüklenemedi")
      }
    }) 
    
  }

  getArticleDetails(articleId:number){
    this.articleService.getArticleByArticleId(articleId).subscribe(response =>{
      this.article = response.data;
      console.log()
      this.dataLoaded = true;
    })
  }
}
