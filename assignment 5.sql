--                              assignment 5
-- To solve below queries use "hr" database
-- Display first name and last name after converting the first letter of each name to upper case and
-- the rest to lower case.

-- SELECT UPPER(left(FIRST_NAME,1))+SUBSTRING(FIRST_NAME,2,LEN(FIRST_NAME)) as FIRST_NAME ,
-- UPPER(left(LAST_NAME,1))+SUBSTRING(LAST_NAME,2,LEN(LAST_NAME)) as LAST_NAME
--    FROM employees;


-- Display the first word in job title.
-- SELECT LEFT(JOB_TITLE,1) as job_title from jobs;

-- Display the length of first name for employees where last name contain character ‘b’ after 3rd
-- position.

-- Select first_name , last_name ,LEN(First_name) as length_of_fn from employees where LAST_NAME like '___b%';

-- Display first name in upper case and email address in lower case for employees where the first
-- name and email address are same irrespective of the case.


-- SELECT  UPPER(First_name) as FIRST_NAME ,LOWER(Email) as Email from employees where FIRST_NAME = EMAIL;


-- Display first name, salary, and round the salary to thousands




-- Display employee ID and the date on which he ended his previous job
-- SELECT Employee_id ,end_date from job_history

-- Display first name and date of first salary of the employees.
-- select
-- min(j.START_DATE) as First_Job_Date,
-- e.FIRST_NAME as F_name,
-- e.SALARY as First_salary
-- FROM
-- job_history j
-- left outer JOIN
-- employees e
-- on
-- j.EMPLOYEE_ID = e.EMPLOYEE_ID
-- GROUP by e.FIRST_NAME, e.SALARY;

-- Display first name and experience of the employees.
-- use  HR_DB;
-- select

-- EMPLOYEE_ID,

-- CONVERT(Varchar(10),SUM(datediff(MONTH,START_DATE,END_DATE))/12)+' Years '

-- +CONVERT(Varchar(10),SUM(datediff(MONTH,START_DATE,END_DATE))%12)+' Months'

-- as 'Emp_Experience in Months'

-- from job_history

-- GROUP by EMPLOYEE_ID;

-- Display first name of employees who joined in 2001.

-- SELECT First_name from employees where HIRE_DATE ='2001'

-- Display employees who joined in the current year.

-- SELECT Employee_id ,First_name from employees Where HIRE_DATE =GETDATE()

-- Display the number of days between system date and 1st January 2011.

-- Display number of employees joined after 15th of the month.

-- SELECT Employee_id , first_name from employees where HIRE_DATE > '15'
