
/*  To connect MySql Database with CLI i.e shell -

  >mysql -u root -p

// What is SQL?
    SQL is the standard language for dealing with Relational Databases.

    SQL is used to insert, search, update, and delete database records.

Note : i) SQL keywords are NOT case sensitive: select is the same as SELECT and We will write all SQL keywords in upper-case to seperate it from users statements.

ii) Some database systems require a semicolon at the end of each SQL statement.

Semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.

Thus, we will use semicolon at the end of each SQL statement.


//Important Commands of MySQL -

i) SHOW DATABASES;  -> To show all databse presnet under >mysql 
ii) CREATE DATABASE <database_name>;   -> To create a database under the >mysql
iii) USE <database_name>;   --> To use any specific databse under the >mysql
iv) SHOW TABLES;  --> To show all tables under any specific database.
v) To create the table structure column names with its datatype under the any specific database -
        CREATE TABLE <Table_name>(     
            colname1 <datatype> <constraint1> <constraint2> ..,
            colname2 <datatype> <constraint1> <constraint2> ..,
            colname3 <datatype> <constraint1> <constraint2> ..,
        
            ........

        );

      e.g: -

        CREATE TABLE <Table_name>(     
            id   INT   NOT NULL   UNIQUE,
            name   VARCHAR(50)   NOT NULL,
            age  INT    NOT NULL    CHECK (age>=18),
            gender   VARCHAR(10)  NOT NULL,
            phone   VARCHAR(10)   NOT NULL   UNIQUE,
            city   VARCHAR(10)   NOT NUL     DEFAULT 'Agra'

        );
Note: NOT NULL --> Khali nahi chod skte 
      UNIQUE  --> Ye Unique hoga complete table ke records me.
      DEFAULT  --> if user inserting the data under any 'colname' and if he skip the value then default sets 'row vlaue' get inserted.

VI) To see the created table structure with column names and its datatypes and also sets contraints value to each columns -

DESC <table_name>;  or,  DESCRIBE <table_name>;    


VII) To insert the rows i.e records i.e data inside the created column names, under any specific database, (where table names will not be same under the same database) -

    a)Insert one row data at a time -
    INSERT INTO <table_name> (colname1, colname2, ....)
    VALUES
    (value1, value2, ....);

    b) Insert Multiple Rows with its data at a time -
    INSERT INTO <table_name> (colname1, colname2, ....)
    VALUES
    (value1, value2, ....),
    (value1, value2, ....),
    (value1, value2, ....);

    Note:  Here, If you interchange the colnames order then, put values in the same order and if you ommit any value then it will take NULL value bydefault.

    c) Insert Row or Rows with skipping the column names -

    INSERT INTO <table_name>
    VALUES
    (value1, value2, ....);

    INSERT INTO <table_name>
    VALUES
    (value1, value2, ....),
    (value1, value2, ....),
    (value1, value2, ....);

    Note : Here, Table will take values in the same order of the created columns names.

#List of Constraints in MySQL - 
To apply conditions/restrictions while creating the table with its column names, we put all these restrition once or multiple restritions to each coloumn names. (e.g: Age of user Col we can set Restrition, PhoneNum can't be dupicate if we put restriction, to not leave any colvalue ommited, to have unique id  )

NOT NULL  -> User can't leave row value empty i.e must have inserted a value.
CHECK(age>=18)  -> TO have the restrcition over tha 'age' column.
UNIQUE -> To avoid not to use same phone numder i.e any column value same e.g user id, phone number, email id.
DEFAULT 'Agra'  -> TO add a default values to all rows of a specific column.



VIII) TO see inserted data or datas inside any table under any database -

a) To see specific columns data only -

SELECT colname1, colname2, colname5, ....
FROM <table_name> ;

e.g: SELECT name, city, country FROM customers; //here, name,city,country are column names which data we want to see from the table name 'customers'

b) To see all columns present inside the table datas -

SELECT * 
FROM <table_name> ;

Note : We use * to select all columns under the table.
e.g: SELECT * FROM customers;


c) TO see columns data with a new names for just query purpose only (We use 'AS' keyword then our own defined name if owned defined name contains space then put it in quotes) -

SELECT name AS UserName, city, country AS UserCountry FROM customers; 

SELECT name AS "User Name", city, country AS "User Country" FROM customers; 


IX) WHERE Clause : we use where clause to see data based on some conditions -

The WHERE clause is used to filter records.
It is used to extract only those records that fulfill a specified condition.

e.g : Want to see records only who are 'female' under the sepecific col -
e.g : Want to see records only whose age are under 20 under the 'Age' col -

We use WHERE Clause along with SELECT command.

Syntax : -

SELECT colname1, colname2, colname5, ....
FROM <table_name>
WHERE colname = filterValue  //condtion;


E.g: Select all records where the 'City' column has the value "Berlin".

SELECT * FROM Customers
WHERE City = "Berlin";

 SELECT * FROM personal
    -> WHERE gender="F";

SELECT * FROM personal
    -> WHERE id<=20;

 SELECT * FROM personal
    -> WHERE name != "Divya Verma";

 SELECT * FROM personal
    -> WHERE name <> "Divya Verma";

 SELECT name,id FROM personal
    -> WHERE name <> "Divya Verma";

Note: The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!

Note : Operators in The WHERE Clause -

=	Equal	
>	Greater than	
<	Less than	
>=	Greater than or equal	
<=	Less than or equal	
<>	Not equal. Note: In some versions of SQL this operator may be written as !=	

BETWEEN	   ->  Between a certain range	

LIKE  ->	Search for a pattern	

IN	 ->   To specify multiple possible values for a column



X) WHERE Clause with AND, OR and NOT Operators : To filter out records based on mora than one conditions to put on togther with WHERE clause.

The WHERE clause can be combined with AND, OR, and NOT operators.

The AND and OR operators are used to filter records based on more than one condition:

The AND operator -> displays a record if all the conditions separated by AND are TRUE.
The OR operator ->  displays a record if any of the conditions separated by OR is TRUE.
The NOT operator -> displays a record if the condition(s) is NOT TRUE.

AND Syntax :-

SELECT column1, column2, ...
FROM <table_name>
WHERE condition1 AND condition2 AND condition3 ...;

Note: FOR AND operator, if here all specified condition get true then only we see those filtered records, if went false anyone of it then we can't see those records.

e.g: Filter age based on above 18 or equal but less than 21 or equla -

 SELECT * FROM personal
    WHERE Age>=18 AND Age<=21

OR Syntax :-

SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;

Note : OR Operator, if anyone of the contions get true, then show the records.

e.g: Show age which are either 18 OR, 21 -
 SELECT * FROM personal
    WHERE Age=18 OR Age=21

NOT Syntax :-

SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;

XI) 'ORDER BY' Command with  SELECT : - ORDER BY Command is used to sort the result-set in ascending or descending order. To sort the records in accending order use 'ASC' Command and in descending order use 'DESC' command.

Note : IF we dont mention any ASC or DESC command then ORDER BY keyword sorts the records in ascending order by default.

Syntax of ORDER BY with SELECT Command -

    SELECT colname1, colname2, ...
    FROM <table_name>
    ORDER BY colname1, colname2, ... ASC or DESC;

e.g: Short name coloumn from the personal table -(By default it shorts in accending i.e A TO Z letter..)

    SELECT * FROM personal                            
        -> ORDER BY name;

e.g: Short name coloumn from the personal table in decending order(i.e Z TO A letter..)

        SELECT * FROM personal                            
        -> ORDER BY name DESC;

Note: WE can mix the condition here with WHERE command -
e.g: Display table with 'city' col as "Agra" only and then Sort the 'name' col in descending order -

        SELECT * FROM personal                            
        -> WHERE city="Agra"
        -> ORDER BY name DESC;

e.g: Sorting multiple cols in accending and decending order at a time -

    SELECT * FROM Customers
    ORDER BY Country, CustomerName;

    SELECT * FROM Customers
    ORDER BY Country ASC, CustomerName DESC;

XI) DISTINCT Command with SELECT : It is use to see fields i.e a perticular col values with duplicate names means we are just concern with kwing all names, WE USE DIDSTINCT commant to that perticular colname -

Syntax : SELECT DISTINCT colname1, colname2,...
         FROM <table_name>;

e.g: we are interresting in knowing all city names i.e dont want same city twice //Want to see field name with removing duplicacy -

    SELECT DISTINCT city FROM personal;
    
e.g: Kis kis age group ke student college me padhte hai or video dekhte hai -

    SELECT DISTINCT age FROM personal;

    SELECT DISTINCT age FROM personal ORDER BY age; /for age sorting in accesing order low to high age.

XII) Multiple Seaching In table records based on some users 'keywords' i.e could be more than one keywors with help of Regular Expression -

Synatax: SELECT colname1, colname2...
         FROM <table_name>
         WHERE <colname> REGEXP <pattern>;

e.g: 'name' col containg 'ra' keyword(Upper or lower both ) -

 SELECT * FROM personal
    -> WHERE name REGEXP 'ra';

e.g : 'name' col containg back to back 'ul' keyword search for us -  

SELECT * FROM personal
    -> WHERE name REGEXP 'ul';

WHERE name REGEXP "khan$ | poor" //search both keywords in 'name' col -


XIII) UPDATE Command : - It is use to update the any existing record data or datas to a new value - like update age or update salary of a user -

Syntax : UPDATE <table_name>
         SET colname1 = value1, colname2 = value2, ...
         WHERE condition i.e target the row by name or id ;

Note :  If Ommit WHERE Command i.e if we dont specifying any selected row i.e targeted row then that new value get updated to all colnames -

         UPDATE <table_name>
         SET colname1 = value1, colname2 = value2, ...       

e.g : > UPDATE personal
    -> SET id=3, phone="1234567890"  //we updated two value at a time.
    -> WHERE name="Rohan Verma"; //targted the row by its name="Rohan Verma"

Note: To change or update you should have a unique targated name or id, else if it will match more than one then will update to both rows.    


XIV) DELETE Command : - this command use to delete single record of a user or multiple records of many users from the table.e,g a new employee left the company so we delete his data from the row i.e his record.

Sysntax : DELETE FROM <table_name>
          WHERE <condition> i.e tageted record row;

 Note: If we ommit WHERE command then all records from the table will get deleted only table structure will left over i.e works like TRUNCATE command.       

          DELETE FROM <table_name>;

e.g: Delete records whose phone matched with "234563402" -

          DELETE FROM personal
          -> WHERE phone="234563402";//deleted all records matching same phoneNo

e.g: Delete records whose age greater than 20 -

          DELETE FROM personal
            WHERE age > 20;


XV) DROP and TRUNCATE Command for Table : - DROP Command use to Delete the table defination along with its content i.e data i.e records whereas TRUNCATE command use to delete only the records from the table and kept remain the table defination.

Synatax : 
          DROP TABLE <table_name>; //Delete the complete table along with its content.

          TRUNCATE TABLE <table_name>; //Keeps the structure of the table defination same.

e.g:- DROP TABLE product; 
      TRUNCATE TABLE personal2;

      
XVI) ROLLBACK and COMMIT command : This command used only at three operation performed with INSERT  or UPDATE or DELETE command. Bascially It will rvertt the insertion or updation or deltetion if we bymistake did that wanted to do for some other record.

Here, ROLLBACK we use at the end of the QUERY which revert the operation. So it will revert all the operation performed previously for same page. So if we dont want revert all then we can use 'COMMIT' command in the beginnig of Revert Operation or In other words we saved the previous operation with 'COMMIT' command.

UPDATE personal
SET age=22
WHERE id=3;

COMMIT; //saved previous operation work. 

UPDATE personal
SET salary=6000
WHERE id=2;

ROLLBACK; //Rollback 






// Some of The Most Important SQL Commands : -

Some of The Most Important SQL Commands
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

*/
