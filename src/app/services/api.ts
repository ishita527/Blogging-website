import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Api {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/login`, { username, password }));
  }

  getBlogs() {
    return firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/blogs`));
  }

  addBlog(title: string, content: string) {
    return firstValueFrom(this.http.post<any>(`${this.baseUrl}/blogs`, { title, content }));
  }

  getBlogById(id: number) {
    return firstValueFrom(this.http.get<any>(`${this.baseUrl}/blogs/${id}`));
  }
}
