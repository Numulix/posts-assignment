import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from 'src/models';
import { PostsService } from '../services/posts-service.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() addNewPostToList = new EventEmitter<Post>();

  @ViewChild('postForm') postForm!: NgForm;
  public postData: Post = {
    title: '',
    body: ''
  };
  public loading: boolean = false;
  public success: boolean = false;

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
        this.success = true;
        this.addPostToList(this.postData);
      },
      error => {
        console.log(error.message);
        this.loading = false;
      }
    )
  }

  addPostToList(post: Post) {
    this.addNewPostToList.emit({...post});
  }

}
