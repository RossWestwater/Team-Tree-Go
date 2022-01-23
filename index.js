const inquirer = require("inquirer");
const db = require("./config/connection");
const { printTable } = require("console-table-printer");

const viewDept = () => {
  db.query(`SELECT * FROM department`, (err, data) => {
    if (err) {
      throw err;
    }
    printTable(data);
    init();
  });
};

const viewRoles = () => {
  const sql = `SELECT
  role.id AS role_id, role.title AS job_title, 
  role.salary AS salary, department.name AS department
  FROM role
  JOIN department ON role.department_id = department.id;`;
  db.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    printTable(data);
    init();
  });
};

const viewEmplye = () => {
  const sql = `SELECT
  employee.id, employee.first_name, employee.last_name, 
  role.title AS job_title, role.salary, CONCAT(manager.first_name, " " ,manager.last_name) AS manager
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee manager ON manager.id = employee.manager_id;
  `;
  db.query(sql, (err, data) => {
    if (err) {
      throw err;
    }
    printTable(data);
    init();
  });
};

const addDept = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDept",
        message: "What would you like the department to be named?",
        validate: (addDept) => {
          if (addDept) {
            return true;
          } else {
            console.log("Plese enter a department name!");
            return false;
          }
        },
      },
    ])
    .then((res) => {
      db.query(
        `INSERT INTO department (name)
        VALUES ('${res.addDept}')`,
        (err, data) => {
          if (err) {
            throw err;
          }
          console.log("department added!");
          viewDept();
        }
      );
    });
};

const addRole = async () => {
  const getDepts = await db
    .promise()
    .query(`SELECT name, id as value FROM department`);
  const userData = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like the Role's title to be?",
      validate: (addRole) => {
        if (addRole) {
          return true;
        } else {
          console.log("Plese enter a Role title!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "salary",
      message: "What is the salary for the role?",
      validate: (addSalary) => {
        if (addSalary) {
          return true;
        } else {
          console.log("Please enter the pay!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "department_id",
      message: "Please enter the id of department this role is tied to",
      choices: getDepts[0],
    },
  ]);
  const createRole = await db
    .promise()
    .query(`INSERT INTO role SET ?`, userData);
  console.log("Role created!");
  viewRoles();
};

const addEmployee = async () => {
  const getRole = await db
    .promise()
    .query(`SELECT title as name, id as value FROM role`);
  const getManager = await db
    .promise()
    .query(
      'SELECT CONCAT(first_name, " " ,last_name) as name, id as value FROM employee'
    );
  const userData = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?",
      validate: (first_name) => {
        if (first_name) {
          return true;
        } else {
          console.log("Plese enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?",
      validate: (last_name) => {
        if (last_name) {
          return true;
        } else {
          console.log("Plese enter a last name!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the employee's role?",
      choices: getRole[0],
    },
    {
      type: "list",
      name: "manager_id",
      message: "Who is the employee's manager?",
      choices: getManager[0],
    },
  ]);
  const createEmplye = await db
    .promise()
    .query(`INSERT INTO employee SET ?`, userData);
  console.log("Employee created!");
  viewEmplye();
};

const updateRole = async () => {
  const getEmployee = await db
    .promise()
    .query(
      'SELECT CONCAT(first_name, " " ,last_name) as name, id as value FROM employee'
    );
  const getRole = await db
    .promise()
    .query(`SELECT title as name, id as value FROM role`);
  const userData = await inquirer.prompt([
    {
      type: "list",
      name: "id",
      message: "Please select an employee whose role you would like to change.",
      choices: getEmployee[0],
    },
    {
      type: "list",
      name: "role_id",
      message: "Please select the role of the employee.",
      choices: getRole[0],
    },
  ]);
  const assignRole = await db
    .promise()
    .query(`UPDATE employee SET role_id =? where id=?`, [
      userData.role_id,
      userData.id,
    ]);
  console.log("Role updated!");
  viewEmplye();
};

const init = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "initialSelection",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((res) => {
      if (res.initialSelection === "view all departments") {
        viewDept();
      } else if (res.initialSelection === "view all roles") {
        viewRoles();
      } else if (res.initialSelection === "view all employees") {
        viewEmplye();
      } else if (res.initialSelection === "add a department") {
        addDept();
      } else if (res.initialSelection === "add a role") {
        addRole();
      } else if (res.initialSelection === "add an employee") {
        addEmployee();
      } else {
        updateRole();
      }
    });
};

init();
