//EXERCICIO 3
const taskUser = process.argv[2]
const taskList = ["Fazer as Atividades", "Botar comida para a Gata", "Estudar"]

const addTask = (task) =>{
   return taskList.push(task)
};

console.log("tarefa adicionada com sucesso. tarefas:",addTask(taskUser))