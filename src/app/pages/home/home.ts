import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from "../../header/header";
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [FormsModule, SlicePipe, Header, RouterLink, NgClass],
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

