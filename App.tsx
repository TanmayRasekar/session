// primitive data types
int, float, char, double, string, boolean

// non primitive data types
array, object, json

// array of numbers
[1,2,3,4,5]

// array of strings
["a","b","c","d","e"]

// array of objects
[{name:"a",age:1},{name:"b",age:2},{name:"c",age:3},{name:"d",age:4},{name:"e",age:5}]

// operators
+ - * / %

// functions
function add(a,b){
    return a+b;
}

// arrow function
const add = (a,b) => a+b;
const add = (a, b) => {
    console.log(a+b);
    return a+b;
}

// classes
class Person{
    name:string;
    age:number;

    constructor(name?:string, age?:number){
        this.name=name;
        this.age=age;
    }
}

// objects
const person = new Person("a",1);

const person1 = new Person();

const person2 = new Person("b")

const person3 = new Person("",2)


// inheritance
class Student extends Person{
    constructor(name?:string, age?:number){
        super(name, age);
    }
}

const student = new Student("a",1);
const student1 = new Student();
const student2 = new Student("b");
const student3 = new Student("",2);

// variable declarations
var, let, const



// loops
// i++   i=i+1
for (let i=0; i<10; i++) {
    console.log(i);
}

// while
let i=0;
while(i<10){
    console.log(i);
    i++;
}

// do while
let j=0;
do{
    console.log(j);
    j++;
}while(j<10)


// pre-increment post-increment and decrement examples
let k=11;
console.log(++k); 
console.log(k);
console.log(k++);
console.log(k);
console.log(--k);
console.log(k);
console.log(k--);
console.log(k);

// variable naming conventions
// camelCase
// snake_case
// PascalCase
// ALLCAPS


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <span>test user</span>
        <h1>test user</h1>
        <ul>
          <li>test user</li>
          <li>test user</li>
          <li>test user</li>
        </ul>
        <ol>
          <li>test user</li>
          <li>test user</li>
          <li>test user</li>
        </ol>
        <table>
          <thead>
            <tr>
              <th>test user</th>
              <th>test user</th>
              <th>test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test user</td>
              <td>test user</td>
              <td>test</td>
            </tr>
            <tr>
              <td colspan="2">test user</td>
              <td>test user</td>
            </tr>
            <tr>
              <td rowspan="2">test user</td>
              <td>test user</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

