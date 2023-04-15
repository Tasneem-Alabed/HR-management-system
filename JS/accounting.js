'use strict';

let employee_Local = localStorage.getItem("Employee");
let dataFromJson = JSON.parse(employee_Local);
let employee = dataFromJson;

function renderInformation() {
    const divAccounting = document.getElementById("renderDepartment");
   let countent=0;
   let averg=0;
   let totalSalar=0;
    const tabelEl = document.createElement("table");
    divAccounting.appendChild(tabelEl);
    for (let i = 0; i < employee.length -1; i++) {
        if (i == 0) {
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
            th4.textContent = "Average";
        }
        for (let j = i + 1; j > 1; j--) {
            if (employee[i].department == employee[j].department) {
                j = 0;
            }
            else if (employee[i].department != employee[j].department) {
                const tr = document.createElement("tr");
                tabelEl.appendChild(tr);

                const th1 = document.createElement("th");
                tr.appendChild(th1);
                th1.textContent = employee[i].department;
                const th2 = document.createElement("th");
                tr.appendChild(th2);
                th2.textContent = numberOfEmploye(th1.textContent);
                countent +=numberOfEmploye(th1.textContent);
                const th3 = document.createElement("th");
                tr.appendChild(th3);
                th3.textContent = totalSalary(th1.textContent);
                totalSalar+=totalSalary(th1.textContent);
                const th4 = document.createElement("th");
                tr.appendChild(th4);
               th4.textContent = avareg(th1.textContent);
               averg+= avareg(th1.textContent);
            }
        }
    }
    const tr = document.createElement("tr");
    tabelEl.appendChild(tr);

    const th1 = document.createElement("th");
    tr.appendChild(th1);
    th1.textContent = "Total";
    const th2 = document.createElement("th");
    tr.appendChild(th2);
    th2.textContent =countent  ;
    const th3 = document.createElement("th");
    tr.appendChild(th3);
    th3.textContent = totalSalar ;
    const th4 = document.createElement("th");
    tr.appendChild(th4);
   th4.textContent =averg  ;


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
renderInformation();