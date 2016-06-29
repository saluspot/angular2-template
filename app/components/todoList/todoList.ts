import {Component, Input} from "@angular/core";

@Component({
	selector:"todo-list",
	template:`
	<div *ngIf="tasks.length == 0" class="col s12">No hay tareas</div>
	<table *ngIf="tasks.length > 0">
		<thead>
			<tr>
					<th data-field="id">Todo</th>
					<th data-field="name">Done</th>
					<th data-field="price">Delete</th>
			</tr>
		</thead>

		<tbody>
			<tr *ngFor="let item of tasks, let i = index" [ngClass]="{'grey-text':item.done}">
				<td [ngClass]="{'done':item.done}">{{item.todo}}</td>
				<td>
				<input type="checkbox" id="test_{{i}}" (change)="item.done = !item.done"/>
				<label [attr.for]="'test_'+i" ></label>
				</td>
				<td><i (click)="delete(i)"class="material-icons">delete</i></td>
			</tr>

		</tbody>
	</table>
	`,
	inputs: ["tasks"],
	styles:[`
			.done{
				text-decoration: line-through;
			}
		`]
})

export class TodoList {
	tasks:Array<Object>

	delete(index){
		this.tasks.splice(index,1)
	}


}
