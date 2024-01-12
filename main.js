import './style.css'
import employees from './data/employees.json';

// SHOW EMPLOYEES AS ARRAY
// console.log(employees);

// LIST OUT EMPLOYEES AS LASTNAME, FIRSTNAME
// for (const employee of employees) {
// 	console.log(`${employee.lastName}, ${employee.firstName}`);
// }

const checkTaxes = (employee) => {
	// logic that checks a tax database
	return false;
}

// USE MAP TO CONVERT employee TO frontendEmployees (firstName, lastName, city)
const frontendEmployees = employees.map(employee => {
	const submittedTaxes = checkTaxes(employee);
	return {
		firstName: employee.firstName,
		lastName: employee.lastName,
		headquarters: employee.address.city,
		isOpen: false,
		submittedTaxes
	};
});

console.log(frontendEmployees);

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Higher Order Graphics</h1>

<h2>List employees as last name, first name (headquarters)</h2>
<p>There are ${frontendEmployees.length} employees:</p>
<ul>
	${frontendEmployees.map(m => `<li>${m.lastName}, ${m.firstName} (${m.headquarters})</li>`).join('')}
</ul>
`
