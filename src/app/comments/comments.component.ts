import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment, Post } from 'src/models';
import { PostsService } from '../services/posts-service.service';

@Component({
  selector: 'comments',
  templateUrl: 'comments.component.html',
})
export class CommentsComponent implements OnInit {
  public postId: string = '';
  public post!: Post;
  public postComments: Comment[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['postId'];
    this.postService.getSinglePost(this.postId).subscribe((response) => {
      this.post = response;
    });
    this.postService.getCommentsForPost(this.postId).subscribe((response) => {
      this.postComments = response;
    });
  }
}
