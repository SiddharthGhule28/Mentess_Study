-- use ASSG3
--
-- create database Sales_db
-- use Sales_db
-- CREATE TABLE salespeople(snum INTEGER, sname varchar(10), city varchar(10), comm decimal(3,2));

-- CREATE TABLE customers(cnum int, cname varchar(10), city varchar(10), rating int, snum int);
--  CREATE TABLE orders(onum INT , amt decimal(7,2), odate date, cnum int, snum int);

--  INSERT INTO salespeople VALUES(1001, 'Peel', 'London', 0.12);
--  INSERT INTO salespeople VALUES(1002, 'Serres', 'San Jose', 0.13);
--  INSERT INTO salespeople VALUES(1004, 'Motika', 'London', 0.11);
--   INSERT INTO salespeople VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
--  INSERT INTO salespeople VALUES(1003, 'Axelrod', 'New York', 0.10);

--  INSERT INTO customers VALUES(2001, 'Hoffman', 'London', 100, 1001);
--   INSERT INTO customers VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
--  INSERT INTO customers VALUES(2003, 'Liu', 'San Jose', 200, 1002);
--  INSERT INTO customers VALUES(2004, 'Grass', 'Berlin', 300, 1002);
--  INSERT INTO customers VALUES(2006, 'Clemens', 'London', 100, 1001);
--  INSERT INTO customers VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
--  INSERT INTO customers VALUES(2007, 'Pereira', 'Rome', 100, 1004);


-- INSERT INTO orders VALUES(3001,18.69,'1990-10-03', 2008, 1007);
-- INSERT INTO orders VALUES(3003,767.19,'1990-10-03', 2001, 1001);
-- INSERT INTO orders VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
-- INSERT INTO orders VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
-- INSERT INTO orders VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
-- INSERT INTO orders VALUES(3009,1713.23,'1990-10-04',2002, 1003);
-- INSERT INTO orders VALUES(3007,75.75,'1990-10-04',2004, 1002);
-- INSERT INTO orders VALUES(3008,4723.00,'1990-10-04',2006, 1001);
-- INSERT INTO orders VALUES(3010,309.95,'1990-10-04',2004, 1002);
-- INSERT INTO orders VALUES(3011,9891.88,'1990-10-04',2006, 1001);


-- SELECT * FROM salespeople;
-- select  * from orders;
-- select * from customers;


--  Write a query that counts the number of salespeople registering orders for each day. (If a
-- salesperson has more than one order on a given day, he or she should be counted only once.
-- SELECT odate,snum,COUNT(*) as count_of_orders 
-- FROM orders 
-- GROUP BY odate,snum;


-- Write a query on the Customers table that will find the highest rating in each city. 
--Put the output in
-- this form:
-- For the city (city), the highest rating is : (rating).

-- SELECT max(rating) as raiting , city  from customers GROUP by city


-- Write a query that totals the orders for each day and places the results in descending order
 
--   SELECT count(odate) "TOTAL ORDERS",
--        odate
-- FROM orders
-- GROUP BY odate
-- ORDER BY "TOTAL ORDERS";

-- Write a query that selects the highest rating in each city.
--  SELECT max(rating) as raiting , city  from customers group by city


-- Largest order taken by each salesperson with order value more than Rs.3000. 7. Select each
-- customer smallest order

-- Select odate, snum, max(amt)
-- from orders
-- where amt > 3000
-- group by odate, snum
-- order by odate,snum;


-- Write a query that selects the total amount in orders for each salesperson for whom this total is
-- greater than the amount of the largest order in the table
-- SELECT sum(amt)
-- FROM orders
-- GROUP BY snum
-- HAVING sum(amt)>
--   (SELECT max(amt)
--    FROM orders);

