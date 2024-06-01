// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = []; // array to store employee objects
  let employeeCount = 0; // variable to store the number of employees the user wants to add

  // user prompt for employee count
  while (isNaN(employeeCount) || employeeCount < 1) {
    employeeCount = parseInt(prompt("How many employees would you like to add?"));

    // verify user entered a number greater than 0
    if (isNaN(employeeCount) || employeeCount < 1) {
      alert("Please enter a valid number greater than 0.");
    }
  }

  // loop though the employeeCount and collect employee data
  for (let i = 0; i < employeeCount; i++) {
    // user prompts for employee's first name, last name, and salary
    const firstName = prompt(`Enter the First Name of Employee #${i + 1}:`);
    const lastName = prompt(`Enter the Last Name of Employee #${i + 1}:`);
    const salary = parseFloat(prompt(`Enter the salary of Employee #${i + 1}:`));

    // employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee); // push employee object to employeesArray
  }

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let averageSalary = 0;

  // loop through the employeesArray array and add up all the salaries
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  averageSalary = totalSalary / employeesArray.length; // calculate average salary

  // display average salary of employees
  // toLocaleString() method is used to format the number as a string and display it as a currency
  // "en-US" gives the string a US currency format ($)
  console.log(`The average salary of all employees: ${averageSalary.toLocaleString("en-US",{style:"currency", currency:"USD"})}`);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];

  // display random employee
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);

  // display random employee's salary
  // toLocaleString() method is used to format the number as a string and display it as a currency
  // "en-US" gives the string a US currency format ($)
  console.log(`${randomEmployee.firstName} ${randomEmployee.lastName} has a salary of: ${randomEmployee.salary.toLocaleString("en-US",{style:"currency", currency:"USD"})}`);

  console.log('==============================');

  return randomEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
