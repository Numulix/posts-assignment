import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/models';
import { PostsService } from '../services/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  public postsSubscription!: Subscription;

  constructor(private postsService: PostsService) { }
  

  ngOnInit(): void {
    this.postsSubscription = this.postsService.getPosts().subscribe(posts => this.posts = posts);
  }

  addPostToStart(post: Post) {
    this.posts.unshift(post);
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
