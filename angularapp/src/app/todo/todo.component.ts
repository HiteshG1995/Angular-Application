import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: any = [];
  editMode:boolean;
  // DI 
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //this.listToDos();
  }

  createTodo(title,name) {
    let todo = {
      id: new Date().getTime(),
      name:name.value,
      title:title.value
    }

    this.todoService.create(todo).subscribe((response) => {
      console.log('todo create', response);
      this.listToDos();
    }, (error => {
      console.log(error)
    }))
  }

  listToDos() {
    this.todoService.list().subscribe((res) => {
      console.log(res)
      this.todoList = res;
    }, (error=> {
      console.log(error);
    }))
  }

  //   editTodo(todo: any) {
  //     let editData = {
  //       id: new Date().getTime(),
  //       title: `Edited title`,
  //       name:'Hitesh Ghadage'
  //     }

      

  //   this.todoService.update(todo.id, editData).subscribe(res=> {
  //     this.listToDos();
  //   })
  // }


  editTodo(todo: any) {
    todo.editMode = true
  }  

  saveChanges(todo: any){
  let editData = {
    id:todo.id,
    name:todo.name,
    title:todo.title
  }

  this.todoService.update(todo.id, editData).subscribe(res=> {
    todo.editMode = false;
  })
}



cancelChanges(todo: any) {
  todo.editMode = false
  todo.title = todo.title;
  todo.name = todo.name;

}


deleteTodo(id: any,todo:any) {
  if(confirm(`Are you sure you want to delete this id ?`)){
      this.todoService.delete(id).subscribe(res => {
        console.log('Record has been deleted');
        this.listToDos();
      })
    }
  }
 

}

  

 
