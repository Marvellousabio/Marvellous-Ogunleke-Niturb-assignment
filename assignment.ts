class Taskx {
    public id:number;
    public title:string;
    public description:string;
    
    constructor(title:string, description:string){
        this.id=Date.now();
        this.title=title;
        this.description=description;
    }

}
class TaskManagerx {
    private tasks: Task[]=[];

    addTask(title:string,description:string): Task{
        const newTask = new Task(title, description);
        this.tasks.push(newTask);
        return newTask;
    }
    updateTask(id: number, newTitle:string, newDescription:string):void {
        const task = this.tasks.find(t=> t.id === id);
        if (task){
            task.title = newTitle;
            
        }
    }
    removeTask() {
        this.tasks.pop();
    }
    
}
