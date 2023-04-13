'use strict';

let form = document.getElementById('empForm');
let employee = [];
function Employee(employeeId , fullName , department , level , image , salary){
this.Employee=employeeId;
this.fullName=fullName;
this.department=department;
this.level=level;
this.salary= 0;
this.image=`./img/${this.fullName}.jpg`;
employee.push(this);
}

let ghazi =new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior"  );
 
let lanl =new Employee(1001 , "Lana Ali","Finance","Senior");

let tamara = new Employee(1002 , "Tamara Ayoub" ,"Marketing" ,"Senior");

let safi = new Employee(1003 ,"Safi Walid","Administration","Mid-Senior");

let omar = new Employee(1004 , "Omar Zaid","Development","Senior");

let rana = new Employee(1005 ,"Rana Saleh" ,"Development","Junior");

let hadi= new Employee(1006 , "Hadi Ahmad","Finance","Mid-Senior");


Employee.prototype.calculate = function() {
 if(this.level == "Senior"){
 this.salary = randomNamber(1500,2000) - (randomNamber(1500,2000) * 0.075);
 }else if(this.level=="Mid-Senior"){
     this.salary=  randomNamber(1000,1500) -(randomNamber(1000,1500) * 0.075) ;
 }else if(this.level == "Junior"){
     this.salary=  randomNamber(500,1000) -(randomNamber(500,1000) * 0.075) ;
 }
}

function randomNamber( min , max){
 
return Math.floor(Math.random() * (max - min) ) + min;

}
ghazi.calculate();
tamara.calculate();
lanl.calculate();
safi.calculate();
omar.calculate();
rana.calculate();
hadi.calculate(); 

Employee.prototype.render =function(){
   
        document.write(`The name is : ${this.fullName}   the Salary = ${this.salary}  `);
        const imgEl = document.createElement('img');
    let secEL=document.getElementById("render");
    secEL.appendChild(imgEl);
    imgEl.src = this.image;
        document.write("<br>")
        document.write("<hr>")
        

    }
 
 function renderEmployee(){
    for(let i = 0 ; i<employee.length ; i++){
        employee[i].render();

    }
 }
 renderEmployee();

 function generateNumber(){
   return Math.floor(Math.random()*(9000+1000));
 }

 form.addEventListener('submit' , gitData);

 function gitData(event){
event.preventDefault();
 let name= (event.target.name.value);
 let department = (event.target.dep.value);
  

 let level=(event.target.level.value);
 let img=(event.target.img.value);

 console.log(name,department,level,img);
 }
    
 generateNumber();
 
 