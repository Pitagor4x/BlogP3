import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/interfaces/category.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPost: FormGroup;
  categories: Category[] = []
  constructor(
    private postsService: PostsService,
  ) {
    this.newPost = new FormGroup({
      titulo: new FormControl('', []),
      texto: new FormControl('', []),
      autor: new FormControl('', []),
      imagen: new FormControl('', []),
      categoria: new FormControl('', []),
    })
  }

  ngOnInit(): void {
    this.categories = this.postsService.getAllCategories()

  }

  getDataForm() {
    console.log(this.newPost.value)
  }

}
