import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPost: Post[] = [];
  categories: Category[] = [];

  constructor() { }
}
