import Todo from './interface/Todo';

interface Interface {
    todoList: Array<Todo>;
    $formEl: string;
}

const todoConfig = {
    todoList: [
        {text: '안녕'},
        {text: '오늘은 렌더링 해볼꺼야'},
        {text: '신난다'}
    ],
    $formEl: '#todo-form'
};

export default todoConfig;
