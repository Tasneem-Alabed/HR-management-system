'use strict';

let employee_Local = localStorage.getItem("Employee");
let dataFromJson = JSON.parse(employee_Local);
let employee = dataFromJson;
 

renderInformation();
function renderInformation() {
    const divAccounting = document.getElementById("renderDepartment");
   let countent=0;
   let averg=0;
   let totalSalar=0;
    
    const tabelEl = document.createElement("table");
    divAccounting.appendChild(tabelEl);
    const tr1 = document.createElement("tr");
    tabelEl.appendChild(tr1);

    const th1 = document.createElement("th");
    tr1.appendChild(th1);
    th1.textContent = "Department";
    const th2 = document.createElement("th");
    tr1.appendChild(th2);
    th2.textContent = "Number of employees";
    const th3 = document.createElement("th");
    tr1.appendChild(th3);
    th3.textContent = "Total Salary";
    const th4 = document.createElement("th");
    tr1.appendChild(th4);
    th4.textContent = "Average"
    
     
        
    const tr2 = document.createElement("tr");
    tabelEl.appendChild(tr2);

    const th5 = document.createElement("th");
    tr2.appendChild(th5);
    th5.textContent = "Administration";
    const th6 = document.createElement("th");
    tr2.appendChild(th6);
    countent += th6.textContent = numberOfEmploye(th5.textContent);
    const th7 = document.createElement("th");
    tr2.appendChild(th7);
    totalSalar += th7.textContent = totalSalary(th5.textContent);
    const th8 = document.createElement("th");
    tr2.appendChild(th8);
    averg += th8.textContent = avareg(th5.textContent);

    const tr3 = document.createElement("tr");
    tabelEl.appendChild(tr3);

    const th9 = document.createElement("th");
    tr3.appendChild(th9);
    th9.textContent = "Marketing";
    const th10 = document.createElement("th");
    tr3.appendChild(th10);
    countent += th10.textContent = numberOfEmploye(th9.textContent);
    const th11 = document.createElement("th");
    tr3.appendChild(th11);
    totalSalar += th11.textContent =totalSalary(th9.textContent);
    const th12 = document.createElement("th");
    tr3.appendChild(th12);
    averg += th12.textContent =avareg(th9.textContent);


    const tr4 = document.createElement("tr");
    tabelEl.appendChild(tr4);

    const th13 = document.createElement("th");
    tr4.appendChild(th13);
    th13.textContent = "Development";
    const th14 = document.createElement("th");
    tr4.appendChild(th14);
    countent+= th14.textContent = numberOfEmploye(th13.textContent);
    const th15 = document.createElement("th");
    tr4.appendChild(th15);
    totalSalar += th15.textContent = totalSalary(th13.textContent);
    const th16 = document.createElement("th");
    tr4.appendChild(th16);
    averg += th16.textContent = avareg(th13.textContent);

     
    const tr6 = document.createElement("tr");
    tabelEl.appendChild(tr6);

    const th21 = document.createElement("th");
    tr6.appendChild(th21);
    th21.textContent = "Finance";

    const th22 = document.createElement("th");
    tr6.appendChild(th22);
    countent += th22.textContent = numberOfEmploye(th21.textContent);

    const th23 = document.createElement("th");
    tr6.appendChild(th23);
    totalSalar += th23.textContent =totalSalary(th21.textContent);

    const th24 = document.createElement("th");
    tr6.appendChild(th24);
    averg += th24.textContent =avareg(th23.textContent);


    const tr = document.createElement("tr");
    tabelEl.appendChild(tr);

    const th17 = document.createElement("th");
    tr.appendChild(th17);
    th17.textContent = "Total";
    const th18 = document.createElement("th");
    tr.appendChild(th18);
    th18.textContent =countent  ;
    const th19 = document.createElement("th");
    tr.appendChild(th19);
    th19.textContent = totalSalar ;
    const th20 = document.createElement("th");
    tr.appendChild(th20);
   th20.textContent =averg  ;


   

        }
 
    
function numberOfEmploye(depEmployee) {
    let key = 0;
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].department == depEmployee) {
            key++;
        }

    }
   
    return key;
}
function totalSalary(depEmployee) {
    let key = 0;
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].department == depEmployee) {
            key=employee[i].salary+key;
        
        }
    }
    return key;
}
function avareg(depEmployee) {

    let key = 0;
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].department == depEmployee) {
            key=employee[i].salary+key;
        
        }

    }
    key=key/numberOfEmploye(depEmployee);
    return key;
}

function redundance(i , countent, averg ,totalSalar){ 
if( i > 0){
for(let j = i ; j > 0 ; j){
if(employee[i].department== employee[j].department){
    countent+= employee.department[i];
}
}
}
}


// function a(){
//     let arr =[2,3,5,1,3,4,1]
//     let key;
//     for(let i = 0 ; i < arr.length ; i++){
//         if(i > 0){
//             for(let j = i-1 ; j >= 0 ; j--){
//                 if(arr[i]==arr[j]){
//                       key=i ;
//                     do{
                      
//                         key++;

//                     }while(arr[key] == arr[i])
//                     i=key;
//                 }
               
                
//             }
//         }
//         console.log(arr[i]);
//         }
      
//     }

// a();

// for (let i = 0; i < employee.length ; i++) {
        
//     if( i > 0){
//           for(let j = i-1 ; j >= 0 ; j--){
//                             if(employee[i].department== employee[j].department && i < employee.length-3 ){
//                                   key=i ;
//                                 do{
//                                     key++;
//                                     if(key < employee.length){
                                
//                                  averg+= avareg(employee[key]);
//                                  totalSalar+=totalSalary(employee[key]);
//                                  countent +=numberOfEmploye(employee[key]);
//                                     }
                                    
//                                 }while(employee[key].department  != employee[i].department );
//                                 i=key;
//                                 console.log("key"+ key);
                           
                        
//                             const tr = document.createElement("tr");
//                             tabelEl.appendChild(tr);
            
//                             const th1 = document.createElement("th");
//                             tr.appendChild(th1);
//                             th1.textContent = employee[i].department;
//                             const th2 = document.createElement("th");
//                             tr.appendChild(th2);
//                             th2.textContent = numberOfEmploye(th1.textContent);
//                             countent +=numberOfEmploye(th1.textContent);
//                             const th3 = document.createElement("th");
//                             tr.appendChild(th3);
//                             th3.textContent = totalSalary(th1.textContent);
//                             totalSalar+=totalSalary(th1.textContent);
//                             const th4 = document.createElement("th");
//                             tr.appendChild(th4);
//                            th4.textContent = avareg(th1.textContent);
//                            averg+= avareg(th1.textContent);
//                     } 
//                 }}
                        
//  }
//                         }
    