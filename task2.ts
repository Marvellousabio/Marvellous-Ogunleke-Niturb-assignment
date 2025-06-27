//task manager
class Task{
    id:number;
    title:string;
    completed: boolean;
    dueDate?:Date;
    description:string;

    constructor(title:string,description:string,dueDate?:Date){
        this.id=Date.now();
        this.title=title;
        this.completed=false;
        this.description=description;
        this.dueDate=dueDate;
    }
    markAsCompleted():void{
        this.completed=true;
        console.log(`Task ${this.title} is marked as completed.`);
    }
    updateDetails(newTitle:string, newDescription:string,newDueDate? :Date):void{
        this.title=newTitle;
        this.description=newDescription;
        this.dueDate=newDueDate;
        console.log(`Task ${this.title} is updated.`);
    }

}

class TaskManager{
    private tasks:Task[]=[];

    addTask(title:string,description:string,dueDate?:Date):Task{
        const newTask = new Task(title,description,dueDate);
        this.tasks.push(newTask);
        return newTask;
    }
    undoTask():Task |null{
        if (this.tasks.length===0){
            console.log('No task to undo.');
            return null;
        }
        const removeTask=this.tasks.pop()!;
        console.log(`Task ${removeTask.title} is removed.`);
        return removeTask;
        
    }
    updateTask(id:number,newTitle:string,newDescription:string,newDueDate?:Date):Boolean{
        const task=this.tasks.find(k=>k.id===id);
        if (task){
            task.updateDetails(newTitle,newDescription,newDueDate);
            return true;
        }
        console.log(`Task with ID ${id} not found.`);
        return false;
    }
    completeTask(id:number):Boolean{
        const task=this.tasks.find(k=>k.id===id);
        if (task){
            task.markAsCompleted();
            return true;
        }
        console.log(`Task with ID ${id} not found.`);
        return false;
    }
    removeTask(id:number):Boolean{
        const taskIndex=this.tasks.findIndex(k=>k.id===id);
        if (taskIndex!==-1){
            this.tasks.splice(taskIndex,1);
            console.log(`Task with ID ${id} removed.`);
            return true;
        }
        console.log(`Task with ID ${id} not found.`);
        return false;
    }


}
const taskManager = new TaskManager();

const taskA =taskManager.addTask('Task A','Description of Task A');
const taskB =taskManager.addTask('Task B','Description of Task B');
const taskC =taskManager.addTask('Task C','Description of Task C');

const taskD =taskManager.undoTask();


taskManager.updateTask(taskA.id,'Updated Task A','Updated Description of Task A');
taskManager.completeTask(taskA.id);

console.log(taskManager)