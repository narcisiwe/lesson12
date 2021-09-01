'use strict';

const headerInput = document.querySelector('.header-input');
const todoControl = document.querySelector('.todo-control');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');


const todoData = [
    // {
    //     value: 'Сварить кофе',
    //     completed: false
    // },
    // {
    //     value: 'Помыть посуду',
    //     completed: true
    // }
];

const render = function() {
    todoList.textContent = '';
    todoCompleted.textContent = '';




    
    // todoData.forEach(function(item){
    //     const li = document.createElement('li');
    //     li.classList.add('todo-item');
    //     li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
    //                     '<div class="todo-buttons">' +
    //                         '<button class="todo-remove"></button>' +
    //                         '<button class="todo-complete"></button>' +
    //                     '</div>';

    //     if(item.completed){
    //         todoCompleted.append(li);
    //     } else {
    //         todoList.append(li);
    //     }

    //     const btnTodoCompleted = li.querySelector('.todo-complete');

    //     btnTodoCompleted.addEventListener('click', function(){
    //         item.completed = !item.completed;
    //         render();
    //     })
    // });



    for (let item = 0; item < todoData.length; item++) {
            const li = document.createElement('li');
            li.classList.add('todo-item');
            li.innerHTML = '<span class="text-todo">' + headerInput.value + '</span>' + 
                            '<div class="todo-buttons">' +
                                '<button class="todo-remove"></button>' +
                                '<button class="todo-complete"></button>' +
                            '</div>';
    
            if(item.completed){
                todoCompleted.append(li);
            } else {
                todoList.append(li);
            }
    
            const btnTodoCompleted = li.querySelector('.todo-complete');
    
            btnTodoCompleted.addEventListener('click', function(){
                item.completed = !item.completed;
                render();
            })
    };
    

    



    if (document.querySelector('li')){

        console.log('hi')
    
        const liRemove = document.querySelector('li');
        console.log(liRemove);
        const btnRemove = liRemove.querySelector('.todo-remove');
        console.log(btnRemove);
        btnRemove.addEventListener('click', function(){
            
            for (let i = 0; i < todoData.length; i++) {
                // console.log(btnRemove);
                // todoData[i].remove();
                // li.remove;
                // console.log(todoData[i])
                console.log(i)
                // render();
            };
        });
    }
};









todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false
    };

    if(headerInput.value === ""){
        return;
    } else {
        todoData.push(newTodo)
        headerInput.value = '';
        render();
    }
});
render();


let json = JSON.stringify(todoData);
console.log(json);

    

