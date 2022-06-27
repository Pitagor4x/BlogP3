import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  myPost: Post | any
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      /* console.log(params) */
      let id: number = parseInt(params['id']);
      this.myPost = this.postService.getById(id)
    })
  }



}
