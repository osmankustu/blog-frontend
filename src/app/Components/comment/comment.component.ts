import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  commentForm:FormGroup
  constructor(private authService:AuthService,private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCommentAddForm();
  }

  createCommentAddForm(){
    this.commentForm = this.formBuilder.group({
      articleComment:["",Validators.required]
      
    })
 }

  add(){
    if(this.authService.isAuthenticated()==true){
      if(this.commentForm.valid){
       //Servis Modulunden gelen veri aktarılacaktır
       this.toastrService.success("Yorumunuz Eklendi");
       
      }else{
        this.toastrService.error("Yorum Kısmı Boş Olamaz!!")
      }

    }else{
      this.toastrService.error("Giriş Yapmalısınız !")
      
    }
  }
}
