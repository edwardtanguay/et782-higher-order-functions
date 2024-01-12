import './style.css';
import employees from './data/employees.json';

// SHOW EMPLOYEES AS ARRAY
// console.log(employees);

// LIST OUT EMPLOYEES AS LASTNAME, FIRSTNAME
// for (const employee of employees) {
// 	console.log(`${employee.lastName}, ${employee.firstName}`);
// }

// EXAMPLE OF REDUCE
// reduce an array of numbers to their sum

const nums = [3, 6, 2, 6, 3];

//old-style
// let sum = 0;
// for (const num of nums) {
// 	sum += num;
// }
// console.log(sum);

//with reduce
const sum = nums.reduce((acc, num) => {
	return acc + num;
}, 0);
// console.log('sum', sum);

//PROOF THAT REDUCE CAN EMULATE ALL OTHER HIGHER ORDER FUNCTIONS
//REDUCE AS MAP
// map: array --> array2

// convert nums to nums * 2 with map
const squaredWithMapNums = nums.map(m => m * 2);
// console.log('with map', squaredWithMapNums);

// convert nums to nums * 2 with reduce
const squaredWithReduceNums = nums.reduce((acc, num) => {
	acc.push(num * 2);
	return acc;
},[]);
console.log('with reduce', squaredWithReduceNums);


const checkTaxes = (employee) => {
	// logic that checks a tax database
	return false;
};

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

// includes examples
const countries = ['USA', 'UK', 'USA'];
// console.log('uk', countries.includes('UK'));
// console.log('usa', countries.includes('USA'));
// console.log('fr', countries.includes('FR'));
// console.log(111, 'UK'.includes('UK'));


// CREATE HTML FOR TERRITORY TOTALS

const territoryTotalHtml = '<p style="color: green">Total territories covered is: nnn</p>';

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Higher Order Graphics</h1>

<h2>List employees as last name, first name (headquarters)</h2>
<p>There are ${frontendEmployees.length} employees:</p>
<ul>
	${frontendEmployees.map(m => `<li>${m.lastName}, ${m.firstName} (${m.headquarters})</li>`).join('')}
</ul>

<h2>Last name and number of territories</h2>
<ul>
	${employees.map(m => `<li>${m.lastName} (has ${m.territoryIDs.length} territories)</li>`).join('')}
</ul>

<h2>All UK employees listed as Last Name, First Name</h2>
<ul>
	${employees.filter(m => m.address.country === 'UK').map(m => `<li>${m.lastName}, ${m.firstName}</li>`).join('')}
</ul>

<h2>(Winnie) All employees that services territories: 1833 or 6897, show employees as FirstName LastName (234234, 234234, 234434)</h2>
<ul> ${employees.filter(m => m.territoryIDs.includes(1833) || m.territoryIDs.includes(6897)).map(m => `<li>${m.firstName} ${m.lastName} (${m.territoryIDs.join(", ")})</li>`).join('')}
</ul> 

<h2>Show total territories covered by all employees, e.g. "Total territories covered is 38."</h2>
${territoryTotalHtml}







<h2>(Phil) All employees that have "french" in notes</h2>

<h2>(???) All USA employees listed as Last Name, First Name, City</h2>
`;