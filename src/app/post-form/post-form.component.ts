import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from 'src/models';
import { PostsService } from '../services/posts-service.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @ViewChild('postForm') postForm!: NgForm;
  public postData: Post = {
    title: '',
    body: ''
  };
  public loading: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.postForm);
    console.log(this.postData);
    this.loading = true;
    this.postsService.createPost(this.postData).subscribe(
      response => {
        console.log(response);
        this.loading = false;
      },
      error => {
        console.log(error.message);
        this.loading = false;
      }
    )
  }

}
