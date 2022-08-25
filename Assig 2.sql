-- CREATE DATABASE Prouduct_db;
-- USE Prouduct_db;
--  CREATE TABLE Order_detail(
--      ID INT PRIMARY KEY IDENTITY(1,1),
--      Order_id INTEGER,
--      Product_id INTEGER,
--      Quantity FLOAT,
--      Price FLOAT,
--      Total_Price Float,
--      Discount FLOAT,
--      FOREIGN KEY(Order_id) REFERENCES orders(id),
--      FOREIGN KEY(Product_id) REFERENCES Product(id),


--  );
-- -- CREATE TABLE Product(
--     ID  INT PRIMARY KEY IDENTITY(1,1),
--     Title VARCHAR(20),
--     Price FLOAT,
--     Description VARCHAR(20),
--     Category INTEGER ,
--     Company VARCHAR(20),
--       FOREIGN KEY(Category) REFERENCES Categories (id),
--  );
-- CREATE TABLE Categories(
--      ID  INT PRIMARY KEY IDENTITY(1,1),
--      Title VARCHAR(20),
--      Description VARCHAR(20),
--  );

-- CREATE TABLE Orders(
--  ID  INT PRIMARY KEY IDENTITY(1,1),
--      Total VARCHAR(20),
--      DATE DATE,
--  );

-- INSERT INTO Categories VALUES('Fashion','this_is_fashion');
-- INSERT INTO Categories VALUES('Furniture','this_is_furniture');
-- INSERT INTO Categories VALUES('Food','this_is_food_sec');
-- INSERT INTO Categories VALUES('Electronic','this_is_Electronic');
-- INSERT INTO Categories VALUES('Pharmacy','this_is_food_Pharma');
--  SELECT * from categories
--  INSERT into Product (Title, Price, Description, Category, Company) VALUES ('tshirt',350,'tshirt_xxcvgas',1,'polo');
-- --  INSERT into Product (Title, Price, Description, Category, Company) VALUES ('Bed',15000,'king_size_bed',2,'sng');
-- --  INSERT into Product (Title, Price, Description, Category, Company) VALUES ('coviself',521,'self_rtpcr',5,'mylab');
-- --  INSERT into Product (Title, Price, Description, Category, Company) VALUES ('burger',298,'tasty_000burger',4,'Burger_king');
--  INSERT into Product (Title, Price, Description, Category, Company) VALUES ('chair',2015,'comfrtable_chair',2,'sagwan');
--  --INSERT into Product (Title, Price, Description, Category, Company) VALUES ('pizza',851,'double_cheese',4,'dominoz');


--   INSERT into Product (Title, Price, Description, Category, Company) VALUES ('tshirt',350,'tshirt_xxcvgasbhfchbzcvdfdxcdz',1,'polo');
--    INSERT into Product (Title, Price, Description, Category, Company) VALUES ('tshirt',350,'tshirt_xxcvgas',1,'polo');

--   INSERT into Product (Title, Price, Description, Category, Company) VALUES ('xyz',205,'cochair',2,'sagwan');
-- SELECT * FROM product;

