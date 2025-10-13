import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {timeout } from 'rxjs';
import {blog, login_data} from './blogs'


//Providing this service to root injector -- so only one instance of this service will be shared across all components
@Injectable({ providedIn: 'root' })
export class Api {
  private baseUrl = 'https://blog-post-mqs4.onrender.com/api/blogs';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<login_data>(`${this.baseUrl}/login`, { username, password });
  }

  getBlogs() {
    return this.http.get<blog[]>(`${this.baseUrl}`).pipe(timeout(5000));
  }

  addBlog(title: string, content: string) {
    return this.http.post<blog>(
      `${this.baseUrl}`,
      { title: title, content: content },
      {
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin1' + ':' + 'admin_1_123'),
        },
      }
    ).pipe(timeout(5000));
  }

  getBlogById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`, {
      headers: {
        Authorization: 'Basic ' + btoa('admin1' + ':' + 'admin_1_123'),
      },
    }).pipe(timeout(5000))
  }

  updateBlogById(id: number, title: string, content: string){
    return this.http.put(`${this.baseUrl}/${id}`, {title, content}, {
       headers: {
          'Content-type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin1' + ':' + 'admin_1_123'),
        },

    }).pipe(timeout(5000))
  }

  deleteBlog(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin1' + ':' + 'admin_1_123'),
        },
    }).pipe(timeout(5000))
  }
}
