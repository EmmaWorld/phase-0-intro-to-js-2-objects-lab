
// Initialize the employee object with name and streetAddress keys
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

// Function to update an employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Function to update an employee object with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key-value pair from an employee object
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key-value pair from an employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}




