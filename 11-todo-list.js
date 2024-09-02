const todoList = [
  {
  name:'hello',
  dueDate: '01-09-2024'
}, {
  name: 'bye',
  dueDate: '01-09-2024'
}
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for( let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      //const name = todoObject.name;
     // const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;
      const HTML = `
     <div>${name}</div>
     <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">Delete</button>
      
      `;
      todoListHTML += HTML;
    }
    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

todoList.push({
  name,
  dueDate
});

 inputElement.value = '';

 renderTodoList();
}