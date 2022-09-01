

-- -- -- -- -- -- -- -- -- -- -- -- assignment 4
-- To solve below queries use "hr" database
-- Write a query to get unique department ID from employee table.
-- SELECT Distinct DEPARTMENT_ID from employees; 

-- Write a query to get all employee details from the employee table order by first name, descending.
-- SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, HIRE_DATE, 
-- JOB_ID, SALARY, COMMISSION_PCT, MANAGER_ID, DEPARTMENT_ID from employees ORDER BY FIRST_NAME DESC;

-- Write a query to get the employee ID, names (first_name, last_name), salary in ascending order of
-- salary.

-- SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, SALARY FROM employees ORDER BY SALARY;

-- Display first name and join date of the employees who is either IT Programmer or Sales Man.

-- SELECT  FIRST_NAME, LAST_NAME, HIRE_DATE
-- 	FROM employees 
-- 		WHERE JOB_ID IN ('IT_PROG','SA_MAN');

-- Display details of employee with ID 150 or 160

-- SELECT * FROM employees where EMPLOYEE_ID = 150 or EMPLOYEE_ID= 160;

-- Display first name, salary, commission pct, and hire date for employees with salary less than 10000.

-- SELECT FIRST_NAME , SALARY, COMMISSION_PCT ,  HIRE_DATE from employees where SALARY <10000;

-- Display employees where the first name or last name starts with S.

-- SELECT * From employees where FIRST_NAME like 's%' or LAST_NAME like  's%' ;


-- Display details of jobs in the descending order of the title

-- SELECT * from jobs ORDER by  JOB_TITLE DESC 

-- Display details of the employees where commission percentage is null and salary in the range 5000
-- to 10000 and department is 30.

-- SELECT * from employees where COMMISSION_PCT = NULL And SALARY BETWEEN  5000  and  10000 and DEPARTMENT_ID = 30;

-- Display employees first_name,email who are working in “Executive” department

-- SELECT FIRST_NAME , EMAIL,(SELECT DEPARTMENT_NAME FROM departments WHERE DEPARTMENT_NAME = 'Executive')from employees

-- Display unique contry_id from locations table.

-- SELECT Distinct COUNTRY_ID from countries


-- Display all employees whose have job_id IT_PROG and FI_ACCOUNt
-- SELECT * from employees where JOB_ID = 'IT_PROG' AND JOB_ID ='FI_ACCOUNT';
-- SELECT * from employees where JOB_ID = 'IT_PROG' OR JOB_ID ='FI_ACCOUNT';


-- Display all countries in ascending order

-- SELECT * from countries ORDER BY COUNTRY_NAME,