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