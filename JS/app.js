'use strict';


let form = document.getElementById('empForm');
let employee = [];
function Employee(employeeId, fullName, department, level, image, salary) {
    this.Employee = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.image = `./img/${this.fullName}.jpg`;
    employee.push(this);
}

// let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");

// let lanl = new Employee(1001, "Lana Ali", "Finance", "Senior");

// let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");

// let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");

// let omar = new Employee(1004, "Omar Zaid", "Development", "Senior");

// let rana = new Employee(1005, "Rana Saleh", "Development", "Junior");

// let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


Employee.prototype.calculate = function () {

    if (this.level == "Senior") {
        this.salary = randomNamber(1500, 2000);

    } else if (this.level == "Mid-Senior") {
        this.salary = randomNamber(1000, 1500);

    } else if (this.level == "Junior") {
        this.salary = randomNamber(500, 1000);

    }
    this.calculateNetSalary();

}
Employee.prototype.calculateNetSalary = function () {


    this.salary = this.salary - (randomNamber(1500, 2000) * 0.075)

    return this.salary;
}

function randomNamber(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

 }
// ghazi.calculate();
// tamara.calculate();
// lanl.calculate();
// safi.calculate();
// omar.calculate();
// rana.calculate();
// hadi.calculate();



// Employee.prototype.render = function () {

//     document.write(`The name is : ${this.fullName}   the Salary = ${this.salary}  `);
//     const imgEl = document.createElement('img');
//     let secEL = document.getElementById("render");
//     secEL.appendChild(imgEl);
//     imgEl.src = this.image;
//     document.write("<br>")
//     document.write("<hr>")


// }

// function renderEmployee() {
//     for (let i = 0; i < employee.length; i++) {
//         employee[i].render();

//     }
// }
// renderEmployee();

function generateNumber() {
    return Math.floor(Math.random() * (9000 + 1000) + 1000);
}
function calcoSalary(level) {
    if (level == "Senior") {
        return randomNamber(1500, 2000) - (randomNamber(1500, 2000) * 0.075);
    } else if (level == "Mid-Senior") {
        return randomNamber(1000, 1500) - (randomNamber(1000, 1500) * 0.075);
    } else if (level == "Junior") {
        return randomNamber(500, 1000) - (randomNamber(500, 1000) * 0.075);
    }
}

form.addEventListener('submit', gitData);

function gitData(event) {
    event.preventDefault();
    let name = (event.target.name.value);
    let id = generateNumber();
    let department = (event.target.dep.value);
    let level = (event.target.level.value);
    let salary = calcoSalary(level);
    let img = (event.target.img.value);
    let newEmployee = new Employee (name , id , department , level ,salary , img) ;
    // rendEmployee(name, id, department, level, salary, img);
   
}
 

function rendEmployee () {
    const seEl = document.getElementById("rendEmployee");

    const divEl = document.createElement("div");


gitEmployee();
 
    for(let i = 0 ; i < employee.length ; i++){
    seEl.appendChild(divEl);
    const imgEl = document.createElement("img");
    divEl.appendChild(imgEl);
    imgEl.src =`./img/${employee[i].fullName}.jpg`;

    const div2El =document.createElement("divEl");
    divEl.appendChild( div2El);

    const pEl = document.createElement("p");
    divEl.appendChild(pEl);
    pEl.textContent=`Name ${employee[i].fullName}`;

    const p2El =document.createElement("p");
    divEl.appendChild(p2El);
    p2El.textContent= ` Id : ${employee[i].employeeId}`;

  
    const p3El = document.createElement("p");
    divEl.appendChild(p3El);
     p3El.textContent="Department : "+ employee[i].department;

    const p4El=document.createElement("p");
    divEl.appendChild(p4El);
    p4El.textContent= "Level : "+ employee[i].level;

    const p5El=document.createElement("p");
    divEl.appendChild(p5El);
    p5El.textContent="Salary : "+employee[i].salary +"$";


    let jsonArray = JSON.stringify(employee);
    localStorage.setItem("Employee" , jsonArray)
    }
}

generateNumber();

function gitEmployee(){
    let jsonArray = localStorage.getItem("Employee");
    let dataFromJson = JSON.parse(jsonArray);
    employee = dataFromJson;
     
}
rendEmployee();
