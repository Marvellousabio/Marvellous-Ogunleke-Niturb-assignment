class Car{
    name:string="";
    color:string="";
    brandName:string="";
    year:number=0;

    // constructor(name:string,color:string,year:number,brandName:string){
    //     this.name=name;
    //     this.color=color;
    //     this.brandName=brandName;
    //     this.year=year
    // }
}     
const bmw= new Car()
const audi= new Car()


bmw.name='BMW';
bmw.color='black';
bmw.brandName='BMW';
bmw.year=2023;

console.log(bmw)


class Person{
    name:string;
    skin:string;
    complexion:string;
    height:number;
    weight:number;

    constructor(name:string,skin:string,complexion:string,height:number,weight:number){
        this.name=name;
        this.skin=skin;
        this.complexion=complexion;
        this.height=height;
        this.weight=weight;
        
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
    eat(){
        console.log(`${this.name} is eating`)
    }

} 
const Bola=new Person('Bola','brown','dark',5.9,70)
const williams=new Person('williams','light','light',6.0,80)
console.log(Bola)
console.log(Bola.weight)
Bola.sleep()
williams.eat()


class Student{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    //method
    introduce():void{
        console.log(`Hello my name is ${this.name} and i am ${this.age} years old`)
    }
}

const Tolu=new Student('Tolu',20);
const Shade=new Student('Shade',18);
const Chuka=new Student('Chuka',16);

Tolu.introduce();
Shade.introduce();
Chuka.introduce();

//animal class
class Animal{
    //Animal class properties
    name:string;
    skinType:string;
//creating constructor for animal class
    constructor(name:string,skinType:string){
        //calling the properties
        this.name=name;
        this.skinType=skinType;
    }
    //method
    makeSound():void{
        console.log(`${this.name} has ${this.skinType} `)
    }

}
const animal1=new Animal ('dog','Fur');
console.log(animal1);
animal1.makeSound();

class Dog extends Animal{
    breed:string;
    constructor(name:string,skinType:string,breed:string ){
        super(name,skinType);
        this.breed=breed;
    }

    barks():void{
        console.log(`${this.name} is barking whoof!!!!`);
    }
}
const dog1=new Dog('Bingo','Fur','German Shepherd');
dog1.makeSound()
dog1.barks()

//polymorphism
//animal class
class Animall{
    //Animal class properties
    name:string;
    skinType:string;
//creating constructor for animal class
    constructor(name:string,skinType:string){
        //calling the properties
        this.name=name;
        this.skinType=skinType;
    }
    //method
    makeSound():void{
        console.log(`${this.name} has ${this.skinType} `)
    }

}
const dogg=new Animall ('dog','Fur');
console.log(dogg);
dogg.makeSound();


class Bird extends Animall{
    fly():void{
        console.log(`${this.name} is Flying`)
    }
}
const parrot=new Bird('parrot','feather');
parrot.fly();
parrot.makeSound();
class Fish extends Animall{ 
    swim():void{
        console.log(`${this.name} is swimming`)
    }
}
const goldfish=new Fish('goldfish','scales');
goldfish.swim();
goldfish.makeSound();


class Vehicle{
    public name:string;
    public readonly model:string;
    public year:number;
    private engine:Boolean=false;


    constructor(name:string,model:string,year:number,engine:Boolean){
        this.name=name;
        this.model=model;
        this.year=year;
        this.engine=engine;
    }
    protected startEngine(){
        this.engine=true;
        console.log(`${this.name} Engine started`)
    }
}
const honda =new Vehicle('Honda','Accord',2024,true);
const toyota1 =new Vehicle('Toyota','Camry',2025,true);
const mercedes =new Vehicle('Mercedes','Benz',2023,true);
honda.name='Honda';
//honda.model='Accord';
console.log(toyota1);
honda.year=2024;
    class BMW extends Vehicle{
        boost():void{
            return this.startEngine()
        }
    }
const toyota =new BMW('Toyota','xl',2025,true);
toyota.boost();

class User{
    public name:string;
    public role:string;
    email:string;

    constructor(name:string,role:string,email:string){
        this.name=name;
        this.role=role;
        this.email=email;
    }

    static createGuest(role:string){
        console.log(`i am ${this.name} and i am the ${role}`)
    }

    static validateEmail(email:string){
        if (email.includes('@')){
            console.log(`${this.name} you entered ${email}. It is a valid email...`);
        } else{
            console.log(`${this.name} You entered ${email}, It is incorrect. Please enter email...`);
        }
    }
}
const john = new User('bola','Guest','john@gmail.com');
const Timmy=new User('Tim',"Principal","timmy@gmail.com")
User.validateEmail(john.email);
User.validateEmail(Timmy.email); 








User.createGuest(john.role);
