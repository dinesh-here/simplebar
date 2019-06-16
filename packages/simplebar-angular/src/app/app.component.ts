import { Component } from '@angular/core';
import { IScrollbarOptions } from './simplebar/simplebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoList: ITodo[];
  scrollBarOption: IScrollbarOptions;
  constructor() {
    this.todoList = [
      {title:'Buy milk', done: false},
      {title:'Buy Veg', done: true},
      {title:'Meeting at 10:20AM', done: false}
    ];
    this.scrollBarOption = {autoHide: false};
  }
  addTodo(ele: HTMLInputElement){
    if(ele.value) {
      this.todoList.unshift({title: ele.value, done: false});
      ele.value = '';
    }
  }
  toggleTodo(todo: ITodo) {
    todo.done = !todo.done;
  }
  removeTodo(idx: number){
    this.todoList.splice(idx,1);
  }
  keyHandler($event){
   if($event.keyCode === 13) {
     this.addTodo($event.target);
   }
    
  }
}

class ITodo{
  title: string;
  done: boolean;
}