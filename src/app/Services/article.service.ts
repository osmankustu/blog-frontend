import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/article';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'https://localhost:44335/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Article>> {
    let newPath = this.apiUrl + "Articles/getall"
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
}
