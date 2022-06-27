import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  arrPosts: Post[] = []
  myCategoryTitle: string = ""
  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let categoria: string = params['titulo'];
      this.arrPosts = this.postService.getByCategories(categoria[0].toUpperCase() + categoria.substring(1))
      this.myCategoryTitle = categoria
    })
  }


}
