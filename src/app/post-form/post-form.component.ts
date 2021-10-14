import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @ViewChild('postForm') postForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.postForm);
  }

}
