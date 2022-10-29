import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  articleAddForm : FormGroup
  constructor(private formBuilder:FormBuilder, 
    private articleService:ArticleService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createArticleAddForm();
  }

  createArticleAddForm(){
     this.articleAddForm = this.formBuilder.group({
       productName:["",Validators.required],
       unitPrice: ["",Validators.required],
       unitsInStock:["", Validators.required],
       categoryId:["",Validators.required]
     })
  }

  add(){
    if(this.articleAddForm.valid){
      let productModel = Object.assign({},this.articleAddForm.value)
      this.articleService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }

}
