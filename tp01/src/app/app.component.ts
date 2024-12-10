import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Task = {
  id: number,
  name: string,
  isDone: boolean
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Todo List';
  taskList: Array<Task> = [
    {
      id: 1,
      name: "Faire les course",
      isDone: false,
    },
    {
      id: 2,
      name: "Peti dej de noel",
      isDone: false,
    },
    {
      id: 3,
      name: "Dormir",
      isDone: true,
    }
  ];

  get completedTasks(): Task[] {
    return this.taskList.filter(task => task.isDone)
  }

  get pendingTasks(): Task[] {
    return this.taskList.filter(task => !task.isDone)
  }

  toggleTask(task: Task):void {
    task.isDone = !task.isDone
  }
}
