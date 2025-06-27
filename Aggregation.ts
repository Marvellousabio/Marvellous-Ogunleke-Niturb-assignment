class Engine{
    start()   {
        console.log('Engine Started');
    }
}
class Carz{
    engine:Engine;

    constructor(engine:Engine){
        this.engine = engine;
    }
    startCar(){
        console.log('Car Started');
        this.engine.start();
    }

}

const engine= new Engine();
const carz=new Carz(engine);
carz.startCar();



class Heart{
    beat(){
        console.log('Heart is beating')
    }
}

class Human{
    heart:Heart;

    constructor(heart:Heart){
        this.heart=new Heart()
    }
    live(){
        console.log('Human is living');
        this.heart.beat();
    }
}
const person =new Human(new Heart());
person.live()

//computer
class CPU{
    process(){
        console.log('CPU is processing');
    }
}
class RAM{
    store(){
        console.log('RAM is storing data');
    }

}
class Computer{
    private cpu:CPU;
    private ram:RAM;

    constructor(cpu:CPU, ram:RAM){
        this.cpu = cpu;
        this.ram = ram;
    }
    boot(){
        console.log('Computer is booting up');
        this.cpu.process();
        this.ram.store();
    }
}
const comp=new Computer( new CPU(), new RAM());
comp.boot()

//Smartphone
class Camera{
    takePhoto(){
        console.log('Taking a photo');
    }

}
class Battery{
    charge(){
        console.log('Battery is charging');
    }
}
class PhoneScreen{
    display(){
        console.log('Displaying content on screen');
    }
}
class Smartphone{
    private camera:Camera;
    private battery:Battery;
    private screen:PhoneScreen;


    constructor(camera:Camera, battery:Battery, screen:PhoneScreen){
        this.camera = camera;
        this.battery = battery;
        this.screen = screen;
    }
    useCamera(){
        console.log('Using smartphone camera');
        this.camera.takePhoto();
    }
    chargeBattery(){
        console.log('Charging smartphone battery');
        this.battery.charge();
    }
    useScreen(){
        console.log('Using smartphone screen');
        this.screen.display();
    }
}


const myPhone = new Smartphone(new Camera(), new Battery(), new PhoneScreen());
myPhone.useCamera();
myPhone.chargeBattery();

//Abstract
abstract class Animalz{
    name:string;

    constructor(name:string){
        this.name=name;
    }

    abstract makeSound():void;

    move(){
        console.log(`${this.name} is moving`);
    }
   
}
 class Dogz extends Animalz{
    makeSound():void{
        console.log('whoof')
    }
    
 }
