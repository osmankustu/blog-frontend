import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'http://osmankustu.cf/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Article>> {
    let newPath = this.apiUrl + "Articles/Getall"
    return this.httpClient.get<ListResponseModel<Article>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Article>> {
    
    let newPath = this.apiUrl + "Articles/GetAllById?CategoryId="+categoryId
    console.log(newPath)
    return this.httpClient.get<ListResponseModel<Article>>(newPath);
    
  }

  add(article:Article):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Articles/add",article)
  }
  getArticleByArticleId(articleId:number):Observable<SingleResponseModel<Article>>{
    let newPath = this.apiUrl + "Articles/GetById?CategoryId="+articleId  
    return this.httpClient.get<SingleResponseModel<Article>>(newPath);
  }
}
