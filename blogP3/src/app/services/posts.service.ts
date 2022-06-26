import { Injectable } from '@angular/core';
import { __param } from 'tslib';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPost: Post[] = [];
  private categories: Category[] = [];
  private id: number = 7;

  constructor() {
    this.categories = [
      { titulo: 'Noticias' },
      { titulo: 'Enemigos' },
      { titulo: 'Jefazos' },
      { titulo: 'Quests' },
      { titulo: 'Lore' },
    ]

    this.arrPost = [
      {
        id: 1,
        titulo: 'Fecha de lanzamiento',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla, esse deleniti cum veritatis, harum, enim totam fuga voluptate facere vel pariatur quas illo impedit! Quia cum hic laudantium quam sed aperiam explicabo ipsam velit consectetur sint ipsa doloribus dolore harum consequatur nostrum iure nam error accusantium quas, quasi assumenda illo nisi? Tempora, optio. Labore fugiat iusto ratione perspiciatis at tenetur saepe explicabo odit quos commodi quo, ipsum quasi nobis blanditiis esse? Excepturi porro quam quisquam sequi rem voluptatem eaque quaerat, fuga obcaecati incidunt eveniet in dolorum quis est aut ipsum neque expedita. Quod ullam natus soluta ab atque voluptate!',
        autor: 'Pedro Bustamante',
        imagen: '../../assets/images/post1.jpg',
        fecha: '01/1/22',
        categoria: 'Noticias',
      },
      {
        id: 2,
        titulo: 'Dragones',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla, esse deleniti cum veritatis, harum, enim totam fuga voluptate facere vel pariatur quas illo impedit! Quia cum hic laudantium quam sed aperiam explicabo ipsam velit consectetur sint ipsa doloribus dolore harum consequatur nostrum iure nam error accusantium quas, quasi assumenda illo nisi? Tempora, optio. Labore fugiat iusto ratione perspiciatis at tenetur saepe explicabo odit quos commodi quo, ipsum quasi nobis blanditiis esse? Excepturi porro quam quisquam sequi rem voluptatem eaque quaerat, fuga obcaecati incidunt eveniet in dolorum quis est aut ipsum neque expedita. Quod ullam natus soluta ab atque voluptate!',
        autor: 'Pedro Bustamante',
        imagen: '../../assets/images/post2.jpg',
        fecha: '01/1/22',
        categoria: 'Enemigos',
      },
      {
        id: 3,
        titulo: 'Malenia',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla, esse deleniti cum veritatis, harum, enim totam fuga voluptate facere vel pariatur quas illo impedit! Quia cum hic laudantium quam sed aperiam explicabo ipsam velit consectetur sint ipsa doloribus dolore harum consequatur nostrum iure nam error accusantium quas, quasi assumenda illo nisi? Tempora, optio. Labore fugiat iusto ratione perspiciatis at tenetur saepe explicabo odit quos commodi quo, ipsum quasi nobis blanditiis esse? Excepturi porro quam quisquam sequi rem voluptatem eaque quaerat, fuga obcaecati incidunt eveniet in dolorum quis est aut ipsum neque expedita. Quod ullam natus soluta ab atque voluptate!',
        autor: 'Pedro Bustamante',
        imagen: '../../assets/images/post3.jpg',
        fecha: '01/1/22',
        categoria: 'Jefazos',
      },
      {
        id: 4,
        titulo: 'Let me solo her',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla, esse deleniti cum veritatis, harum, enim totam fuga voluptate facere vel pariatur quas illo impedit! Quia cum hic laudantium quam sed aperiam explicabo ipsam velit consectetur sint ipsa doloribus dolore harum consequatur nostrum iure nam error accusantium quas, quasi assumenda illo nisi? Tempora, optio. Labore fugiat iusto ratione perspiciatis at tenetur saepe explicabo odit quos commodi quo, ipsum quasi nobis blanditiis esse? Excepturi porro quam quisquam sequi rem voluptatem eaque quaerat, fuga obcaecati incidunt eveniet in dolorum quis est aut ipsum neque expedita. Quod ullam natus soluta ab atque voluptate!',
        autor: 'Pedro Bustamante',
        imagen: '../../assets/images/post4.jpg',
        fecha: '01/1/22',
        categoria: 'Noticias',
      },
      {
        id: 5,
        titulo: 'La Doncella',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla, esse deleniti cum veritatis, harum, enim totam fuga voluptate facere vel pariatur quas illo impedit! Quia cum hic laudantium quam sed aperiam explicabo ipsam velit consectetur sint ipsa doloribus dolore harum consequatur nostrum iure nam error accusantium quas, quasi assumenda illo nisi? Tempora, optio. Labore fugiat iusto ratione perspiciatis at tenetur saepe explicabo odit quos commodi quo, ipsum quasi nobis blanditiis esse? Excepturi porro quam quisquam sequi rem voluptatem eaque quaerat, fuga obcaecati incidunt eveniet in dolorum quis est aut ipsum neque expedita. Quod ullam natus soluta ab atque voluptate!',
        autor: 'Pedro Bustamante',
        imagen: '../../assets/images/post5.jpg',
        fecha: '01/1/22',
        categoria: 'Quests',
      },
      {
        id: 6,
        titulo: 'Castillo Velotormenta',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla, esse deleniti cum veritatis, harum, enim totam fuga voluptate facere vel pariatur quas illo impedit! Quia cum hic laudantium quam sed aperiam explicabo ipsam velit consectetur sint ipsa doloribus dolore harum consequatur nostrum iure nam error accusantium quas, quasi assumenda illo nisi? Tempora, optio.Labore fugiat iusto ratione perspiciatis at tenetur saepe explicabo odit quos commodi quo, ipsum quasi nobis blanditiis esse? Excepturi porro quam quisquam sequi rem voluptatem eaque quaerat, fuga obcaecati incidunt eveniet in dolorum quis est aut ipsum neque expedita. Quod ullam natus soluta ab atque voluptate!',
        autor: 'Pedro Bustamante',
        imagen: '../../assets/images/post6.jpg',
        fecha: '01/1/22',
        categoria: 'Lore',
      },
    ]
  }

  getAllCategories(): Category[] {
    return this.categories
  }

  getAllPosts() {
    return this.arrPost
  }

  getById(pId: number): Post | any {
    return this.arrPost.find(post => post.id === pId)
  }

  getByCategories(pCategory: string): Post | any {
    return this.arrPost.filter(post => post.categoria === pCategory)
  }

  addPost(pData: any): boolean | any {
    pData.id = this.id
    let tiempo = Date.now();
    console.log(tiempo)
    let hoy = new Date(tiempo)
    console.log(hoy)
    pData.fecha = hoy.toLocaleDateString()
    let arrPostLength = this.arrPost.push(pData)
    this.id++

    return (arrPostLength) ? true : false
  }
}
