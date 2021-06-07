import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // title = "Alpha";

  todos:Todo[];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      },
      {
        content: 'Third Todo',
        completed: false
      },
      {
        content: 'Fourth Todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i==id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    if(this.inputTodo.length == 0) {
      console.log("The Todo input is Empty !!!");
    }else{
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
  
      this.inputTodo = "";
    }
  }

}
