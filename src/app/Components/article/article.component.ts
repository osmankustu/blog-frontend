import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Models/article';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [];
  dataLoaded = false;
  filterText="";
  
  constructor(private articleService:ArticleService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["categoryId"]){
          this.getProductsByCategory(params["categoryId"])
        }else{
          this.getProducts()
        }
      })
  }

  getProducts() {
    this.articleService.getProducts().subscribe(response=>{
      this.articles= response.data
      this.dataLoaded = true;
    })   
  }

  getProductsByCategory(categoryId:number) {
    this.articleService.getProductsByCategory(categoryId).subscribe(response=>{
      this.articles = response.data
      this.dataLoaded = true;
    })   
  }

  // addToCart(article:Article){
  //     if(article.articleId===1){
  //       this.toastrService.error("Hata","Bu ürün sepete eklenemez")
  //     }else{
  //       this.toastrService.success("Sepete eklendi",article.articleTitle)
  //       this.cartService.addToCart(product);
  //     }
   
  // }
}
