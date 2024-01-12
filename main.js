import './style.css'
import employees from './data/employees.json';

// console.log(employees);

//
for (const employee of employees) {
	console.log(`${employee.lastName}, ${employee.firstName}`);
}

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Higher Order Graphics</h1>

<h2>List employees as last name, first name</h2>

`
