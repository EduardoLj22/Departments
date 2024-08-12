-- Insert initial departments
INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Sales');
INSERT INTO departments (name) VALUES ('Finance');

-- Insert initial roles
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 80000.00, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Lead', 70000.00, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 60000.00, 3);

-- Insert initial employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Sam', 'Brown', 3, NULL);
