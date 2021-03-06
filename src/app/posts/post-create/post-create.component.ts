import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  enteredTitle = '';
  enteredContent = '';

  ngOnInit() {
  }

  onPostCreate(form: NgForm) {

    if (form.invalid) {
      return;
    }
   this.postsService.addPost(form.value.title, form.value.content);
   form.resetForm();
  }
}
