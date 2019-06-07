import Todo from '../interface/Todo';

class TodoListModel {
    todoList: Array<Todo>;
    constructor(todoList: Array<Todo>){
        this.todoList = todoList;
    }
}
export default TodoListModel;
