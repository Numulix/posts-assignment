import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models';

@Injectable({providedIn: 'root'})
export class PostsService {
    constructor(private httpClient: HttpClient) { }
    
    getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    }

    createPost(postData: Post) {
        return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", {
            ...postData,
            userId: 1
        })
    }

}