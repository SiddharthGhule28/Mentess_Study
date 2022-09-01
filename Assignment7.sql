


-- -- Write a query that lists each order number
--followed by the name of the customer who made the
-- order

-- Select o.onum , c.cname from orders o
--   full outer join customers c on
-- o.cnum = c.cnum;

-- Write a query that gives the names of both the salesperson
-- and the customer for each order along
-- with the order number.

-- SELECT c.cname , s.sname , o.onum from customers c
--  inner join orders o on
-- o.cnum = c.cnum inner join
-- salespeople s on s.snum = c.snum

-- Write a query that produces all customers serviced by salespeople with a commission above 12%.
-- Output the customer’s name, the salesperson’s name, 
--and the salesperson’s rate of commission.

-- SELECT c.cname , s.sname,s.comm from salespeople s 
-- Inner join customers c on 
--  s.snum = c.snum where comm > 0.12

-- Write a query that calculates the amount of the salesperson’s 
--commission on each order
-- by a
-- customer with a rating above 100.

-- select o.onum, c.cname, s.comm as 'commission_%', o.amt * s.comm as commission 
-- from orders o 
--  INNER join customers c on o.cnum = c.cnum
-- INNER join salespeople s  on s.snum = c.snum and c.rating >100

-- Write a query that produces all pairs of salespeople
--  who are living in the same city.
--  Exclude combinations of salespeople
--   with themselves as well as duplicate rows with the order reversed

-- select s.sname as salesperson1 , s2.sname as salesperson1 ,s.city from salespeople s 
-- INNER join  salespeople s2  on s.city =s2.city and s.sname < s2.sname