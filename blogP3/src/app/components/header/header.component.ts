import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias: Category[] = []
  constructor(
    private categoriesService: PostsService
  ) { }

  ngOnInit(): void {
    this.categorias = this.categoriesService.getAll
  }

}
