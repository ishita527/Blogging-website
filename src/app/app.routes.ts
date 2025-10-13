import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/author-homepage/home';
import { CreateBlog } from './pages/create-blog/create-blog';
import { GeneralHomepage } from './pages/general-homepage/general-homepage';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'create-blog/:id/:title', component: CreateBlog},
  { path: 'create-blog', component: CreateBlog },
  {path: 'all-blogs', component: GeneralHomepage}
];
