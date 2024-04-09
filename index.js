import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        { message: "What do you want to add in your todo list?", type: "input", name: "todo" },
        { message: "Add description to the task", type: "input", name: "description" },
        { message: "Do you want to add more todos?", type: "confirm", name: "addTodo", default: "false" }
    ]);
    let todo_desc = {
        name: ans.todo,
        description: ans.description
    };
    todos.push(todo_desc);
    console.log(todos);
    if (!ans.addTodo) {
        condition = false;
    }
}
