System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList() {
                }
                TodoList.prototype.delete = function (index) {
                    this.tasks.splice(index, 1);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: "todo-list",
                        template: "\n\t<div *ngIf=\"tasks.length == 0\" class=\"col s12\">No hay tareas</div>\n\t<table *ngIf=\"tasks.length > 0\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t\t<th data-field=\"id\">Todo</th>\n\t\t\t\t\t<th data-field=\"name\">Done</th>\n\t\t\t\t\t<th data-field=\"price\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let item of tasks, let i = index\" [ngClass]=\"{'grey-text':item.done}\">\n\t\t\t\t<td [ngClass]=\"{'done':item.done}\">{{item.todo}}</td>\n\t\t\t\t<td>\n\t\t\t\t<input type=\"checkbox\" id=\"test_{{i}}\" (change)=\"item.done = !item.done\"/>\n\t\t\t\t<label [attr.for]=\"'test_'+i\" ></label>\n\t\t\t\t</td>\n\t\t\t\t<td><i (click)=\"delete(i)\"class=\"material-icons\">delete</i></td>\n\t\t\t</tr>\n\n\t\t</tbody>\n\t</table>\n\t",
                        inputs: ["tasks"],
                        styles: ["\n\t\t\t.done{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoList);
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todoList.js.map