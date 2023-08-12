class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age); // Call the constructor of the parent class
      this.major = major;
    }
  
    introduce() {
      super.introduce(); // Call the introduce method of the parent class
      console.log(`I am majoring in ${this.major}.`);
    }
  }
  
  const person1 = new Person("Maria", 22);
  person1.introduce(); // Output: "Hello, my name is Maria and I am 22 years old."
  
  const student1 = new Student("Mimi", 22, "Computer Science and Engineering");
  student1.introduce(); // Output: "Hello, my name is Mimi and I am 22 years old. I am majoring in Computer Science and Engineering."