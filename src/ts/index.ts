// style
import "../scss/app.scss";

import TodoListModel from './Model/TodoList';
import TodoForm from './View/TodoForm';
import todoConfig from './confing';



const todoModel = new TodoListModel(todoConfig.todoList);
const todoForm = new TodoForm(todoConfig.$formEl);

