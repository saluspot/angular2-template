import {Component} from "@angular/core"
import {TodoList} from "../todoList/todoList";
@Component({
  selector: "app",
  templateUrl:"./app/components/home/home.html",
  directives:[TodoList]
})
export class Home {
  tasks:Array<Object> = []
  task:String;

  addTask(task){
    if(task){
      this.tasks.push({todo:task,done:false})
      this.task = null
      setTimeout(()=>{
         window.Materialize.updateTextFields()
         document.querySelector("form").reset()
         
      },100)
    }
  }
}
