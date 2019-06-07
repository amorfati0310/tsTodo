class TodoView {
    el: HTMLFormElement;
    constructor(el:string){
        this.el = document.querySelector(el) as HTMLFormElement;
        this.init();
    }
    init(){
        this.el.addEventListener('submit', (e)=>{
            e.preventDefault();
            this.addTodo();
            // can be static 이라고 warning이 떠서 이렇게 고쳤는데 this로 쓰면 왜??
            //
            TodoView.clearTodoInput(this.el.todoInput)
            // this.el.reset()도 있음
        })
    }
    addTodo(){

    }
    static clearTodoInput($inputEl: HTMLInputElement): void{
        $inputEl.value = '';
    }

}

export  default TodoView;
