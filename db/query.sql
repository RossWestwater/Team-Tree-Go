DROP DATABASE IF EXISTS teamroster_db;
CREATE DATABASE teamroster_db;
USE teamroster_db;

DROP TABLE IF EXISTS department, role, employee;

CREATE TABLE department (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2) NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

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
);

INSERT INTO department (name)
VALUES 
  ('Customer Service'), 
  ('Claims'),  
  ('Development'), 
  ('Human Resources')
  ;

INSERT INTO role (title, salary, department_id)
VALUES 
  ('Service Manager', 70000.00, 1),
  ('Service Rep', 38000.00, 1),
  ('Claims Manager', 70000.00, 2),
  ('Claims Rep', 40000.00, 2),
  ('Software Manager', 150000.00, 3),
  ('Software Engineer', 75000.00, 3),
  ('HR Manager', 100000.00, 4),
  ('HR Rep', 50000.00, 4)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ('Stacy', 'Winsky', 1, NULL),
  ('Jordan', 'Smith', 2, 1),
  ('Anthony', 'Wielding', 3, NULL),
  ('Alexis', 'Bastion', 4, 3),
  ('Alison', 'Temurc', 5, NULL),
  ('Trevor', 'Chang', 6, 5),
  ('Kiera', 'Westwater', 7, NULL),
  ('Ross', 'Westwater', 8, 7),
  ('Brody', 'Maxwell', 2, 1),
  ('Sean', 'Maxwell', 4, 3),
  ('Bobby', 'Shelton', 6, 5)
;

-- SELECT
--   employee.id, employee.first_name, employee.last_name, 
--   role.title AS job_title, role.salary, CONCAT(manager.first_name, " " ,manager.last_name) AS manager
-- FROM employee
-- LEFT JOIN role ON employee.role_id = role.id
-- LEFT JOIN department ON role.department_id = department.id
-- LEFT JOIN employee manager ON manager.id = employee.manager_id;
-- -- manager is defined in the join statement 'employee manager'.
