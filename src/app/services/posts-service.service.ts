import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, Post } from 'src/models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getSinglePost(id: string): Observable<Post> {
    return this.httpClient.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  createPost(postData: Post) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', {
      ...postData,
      userId: 1,
    });
  }

  getCommentsForPost(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  }
}
