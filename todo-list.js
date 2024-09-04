let todoList = [];
            renderTodolist();
            
            function AddTodo() {
                const inputElement = document.querySelector(".todo-input");
                const inputDate = document.querySelector(".date-input")
                const name = inputElement.value;
                if (name === '') {
                    return;
                }
                const dueDate = inputDate.value;
                todoList.push({name, dueDate}); // shortcut for {name: name}
                inputElement.value = '';
                inputDate.value = '';
                renderTodolist();
            }
            
            function renderTodolist() {
                let todoListHTML = '';
                for (let i = 0; i < todoList.length; i++) {
                    const todoObject = todoList[i];
                    // const name = todoObject.name; -> shortcut
                    const {name} = todoObject;
                    const {dueDate} = todoObject;
                    const html = 
                        `<p class='task-name'>${name}</p>
                        <p class='task-date'>${dueDate}</p>
                        <button class='delete-button' 
                            onclick="
                            todoList.splice(${i}, 1);
                            renderTodolist();
                            ">Delete</button>`;
                    todoListHTML += html;
                    
                }
                document.querySelector(".todo-low-container").innerHTML = todoListHTML;
            };