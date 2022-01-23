
SELECT
  employee.id, employee.first_name, employee.last_name, 
  role.title AS job_title, role.salary, CONCAT(manager.first_name, " " ,manager.last_name) AS manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id;
-- manager is defined in the join statement 'employee manager'.


SELECT
  employee.id AS employee_id, employee.first_name AS first_name, employee.last_name AS last_name, 
  role.title AS job_title, role.salary AS salary, department.name AS department, employee.manager_id as manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON manager_id = employee.id;



FROM role
JOIN department ON role.department_id = department.id;

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department

SELECT
  -- Select the columns from both tables --
  books.book_name AS book_name, prices.price AS price
FROM books
  -- Defines relationship between two tables --
JOIN prices ON books.price = prices.id;

CREATE TABLE employee (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id)

  CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2) NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);