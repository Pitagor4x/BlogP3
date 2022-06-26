import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
  ) {
    this.newPost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern('^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?))\://)?(www.|[a-zA-Z0-9].)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\:[0-9]{1,5})*(/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$')
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),

    })
  }

  ngOnInit(): void {
    this.categories = this.postsService.getAllCategories()

  }

  getDataForm() {
    let peticionParaPostear = this.postsService.addPost(this.newPost.value);
    if (!peticionParaPostear) {
      this.router.navigate(['/new'])
    }
    this.router.navigate(['/home'])
  }

  validatorControl(pName: string, pError: string): boolean {
    if (this.newPost.get(pName)?.hasError(pError) && this.newPost.get(pName)?.touched) {
      return true
    }
    return false

  }

}



