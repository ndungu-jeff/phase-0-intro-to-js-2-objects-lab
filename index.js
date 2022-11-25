
const employee = {};
employee.name = "Jeff";
employee.streetAddress = "Nairobi";


employee;



function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value

    return newEmployee
}

const nonDestructiveUpdatedEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "sam"
    )

    //adding object using dot notation

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    
    return employee;
}

const destructiveEmployeeUpdates = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "sam"
   )
   console.log(destructiveEmployeeUpdates)

function deleteFromEmployeeByKey(employee,key){
    const employeeCopy = {...employee}
    delete employeeCopy["name"]


    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newEmployee = delete employee["name"]

    return employee;
}