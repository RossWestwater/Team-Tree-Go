class Employee {
  constructor (id, first_name, last_name, manager_id){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.manager_id = manager_id;
  }
  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email
  }
  getRole(){
    return 'Employee'
  }
}

module.exports = Employee;