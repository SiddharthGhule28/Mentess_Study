-- CREATE DATABASE Student_db;
-- USE Student_db;
-- CREATE TABLE School(

--     ID INTEGER PRIMARY KEY IDENTITY (1,1),
--     S_Name VARCHAR (20),
--     S_Address VARCHAR(20),
--     Principal_n VARCHAR(20),
--     S_phone VARCHAR(10),

-- );
-- CREATE TABLE Student(
--     ID INTEGER PRIMARY KEY IDENTITY (1,1),
--     Name VARCHAR (20),
--     Address VARCHAR(20),
--     Phone VARCHAR(10),
--     Email VARCHAR(20),
--     Age INT,
--     SchoolId INT ,
--     FOREIGN KEY (SchoolId) REFERENCES School(ID),
-- );
-- INSERT INTO School ( S_Name, S_Address, Principal_n, S_phone) VALUES ('xaviers ','mahad','jhon','8798789546');
-- INSERT INTO School ( S_Name, S_Address, Principal_n, S_phone) VALUES ('ramdas vidaylay ','birwadi','sham meheta','6987541235');
-- INSERT INTO School ( S_Name, S_Address, Principal_n, S_phone) VALUES ('trinity school','pune','kalyan jadhav','9578461235');
-- SELECT * from School;

--  INSERT INTO Student (Name, Address, Phone, Email, Age, SchoolId ) 
--   VALUES ('Shivam','jite','7894561230','shivam@gmail.com',16,1);
--   INSERT INTO Student (Name, Address, Phone, Email, Age, SchoolId ) 
--   VALUES ('Suraj','mahad','8794566123','ssd@gmail.com',15,2);
--    INSERT INTO Student (Name, Address, Phone, Email, Age, SchoolId ) 
--  VALUES ('vishal','pune','6994561230','vishal@gmail.com',14,3);
--   INSERT INTO Student (Name, Address, Phone, Email, Age, SchoolId ) VALUES ('Shiv','birwadi','945678230','shiv@gmail.com',16,3);
-- INSERT INTO Student (Name, Address, Phone, Email, Age, SchoolId ) VALUES ('karan','mahad','3794566123','karan@gmail.com',12,1);
--   INSERT INTO Student (Name, Address, Phone, Email, Age, SchoolId ) VALUES ('rohit','Kolhapur','9945612306','rohit@gmail.com',14,2);
--   SELECT * FROM Student;

