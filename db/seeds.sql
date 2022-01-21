INSERT INTO department (name)
VALUES ('Customer Service', 'Claims', 'Accounts Receivable', 'Accounts Payable', 'Product Development', 'Human Resources');

INSERT INTO role (title, salary)
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(7,2) NOT NULL,
  department_id INTEGER NOT NULL
;

CREATE TABLE employee (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NOT NULL
);