import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from "../../header/header";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, SlicePipe, Header, RouterLink],
  templateUrl: 'home.html',
  styleUrl: 'home.css'
})
export class Home implements OnInit {
  blogs: any[] = [];

  constructor(private api: Api, private router: Router) {}

  async ngOnInit() {
    this.blogs = await this.api.getBlogs();
    console.log(this.blogs);
  }

  viewBlog(id: number) {
    this.router.navigate(['/create-blog', id]);
    console.log(id);
  }
}

