 --use ASSG3

--  Question 1 
-- Write a query that uses a subquery to obtain 
-- all orders for the customer named Cisneros. Assume
-- you do not know his customer number (cnum).


--  select c.cname,o.onum from customers c, orders o where
-- c.cnum=o.cnum and c.cname='cisneros' 
--  order by c.cname;

--  Question 2
-- -- Write a query that produces the names and ratings of all customers
-- --  who have above- average
-- -- order

-- select c.cname, o.amt from customers c,orders o where 
-- c.cnum=o.cnum and 
-- amt>(select avg(amt) as amt from orders)
-- group by cname;

--  Question 3
-- Write a query that selects the total amount in orders
--  for each salesperson for whom this total is
-- greater than the amount of the largest order in the tables 

-- select sum(amt) as total_amt , snum from orders 
-- group by snum
-- having sum(amt) > (select max(amt) from orders)

--  Question 4 

-- Write a query that selects all customers whose ratings are equal to or
--  greater than ANY of Serres.
-- select * from customers c
-- where rating >= ANY (select rating from customers 
-- inner join salespeople s on c.snum=s.snum and s.sname='serres' ) 

-- --  Question 5
-- Write a query using ANY or ALL that will find all salespeople who have
--  no customers located in
-- their city.
--  select s.sname , s.city, c.cname , c.city as cus_city from salespeople  s  ,
--  customers c  where s.snum=c.snum and s.city!=c.city; 

-- --  Question 6

-- Write a query that
--  selects all orders for amounts greater than any for the customers in London.
-- SELECT * from orders where amt > (select snum from customers where city ='london')

-- --  Question 7
-- Extract all the orders of Motika.
-- select a.sname,b.onum,b.amt from salespeople a,orders b,customers c where a.snum=c.snum and c.cnum=b.cnum and sname='motika';

-- --  Question 8
-- Find all the order attribute to salespeople servicing customers in London
-- SELECT * from orders o  
-- INNER join 
-- salespeople s on o.snum = s.snum and s.city = 'london'


-- -- --  Question 9
-- Find names and numbers of all salesperson who have more than one customer. 

-- SELECT s.sname ,s.snum from salespeople s INNER JOIN customers c on 
-- s.snum < c.snum


      --Question 10.
--  Find salespeople number,name and city who have multiple customers.
-- select s.snum,s.sname ,s.city from salespeople s INNER JOIN customers c on s.snum < c.snum



-- -- --  Question 11
-- Select all orders that had amounts that were greater that at least one of the orders from ‘1990-10-
-- 04’
-- SELECT * from orders 
-- where 
-- amt >= any(select amt from orders where odate = '1990-10-04')


-- -- --  Question 12
--Find all orders with amounts smaller than any amount for a customer in San Jose.
-- select * from orders  o where 
-- amt < ANY (select o.amt from orders  inner join 
-- customers c  ON
-- o.cnum = c.cnum and city ='san jose')


--question  13
-- Select those customers whose rating are higher than every customer in Paris.
-- select cnum , cname , city ,rating ,snum from customers where rating  < all (select rating from customers where city = 'paris') 