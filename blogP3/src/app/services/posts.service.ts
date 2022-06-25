import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPost: Post[] = [];
  private categories: Category[] = [];

  constructor() {
    this.categories = [
      { titulo: 'Noticias' },
      { titulo: 'Viajes' },
      { titulo: 'Videos' },
      { titulo: 'Imagenes' },
      { titulo: 'Musica' },
    ]

    this.arrPost = [
      {
        id: 1,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: '../../assets/images/ER-avatars-5.jpg',
        fecha: 'string',
        categoria: 'string',
      },
      {
        id: 2,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: '../../assets/images/ER-avatars-5.jpg',
        fecha: 'string',
        categoria: 'string',
      },
      {
        id: 3,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: '../../assets/images/ER-avatars-5.jpg',
        fecha: 'string',
        categoria: 'string',
      },
      {
        id: 4,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: '../../assets/images/ER-avatars-5.jpg',
        fecha: 'string',
        categoria: 'string',
      },
      {
        id: 5,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: '../../assets/images/ER-avatars-5.jpg',
        fecha: 'string',
        categoria: 'string',
      },
      {
        id: 1,
        titulo: 'string',
        texto: 'string',
        autor: 'string',
        imagen: '../../assets/images/ER-avatars-5.jpg',
        fecha: 'string',
        categoria: 'string',
      },
    ]
  }
  getAllCategories(): Category[] {
    return this.categories
  }
  getAllPosts() {
    return this.arrPost
  }
}
