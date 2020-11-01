# Database Normalization
To understand database normalization, let's start with a set of questions about the coming table.
## SalesStaff
**EmployeeID** | **SalesPerson** | **SalesOffice**| **officeNumber**| **Cusetomer1**| **Cusetomer2**| **Cusetomer3**
--- | --- | --- | --- | --- | --- | ---
1003 | Mary Smith | Chicago | 312-555-1212 | Ford | GM | 
1004 | John Hunt | New York | 212-555-1212 | Dell | HP | Apple
1005 | Martin Hap | Chicago | 312-555-1212 | Boeing |  |

#### What if we want to remove John Hunt?
Office data and customers data will be lost. 

#### What if we want to serch for the customer Ford?
We need to search on three columns Cusetomer1 , Cusetomer2 and Cusetomer3. Of course this will work but what will happen if we want to sort by coustomer?

## Definition of Database Normalization
Database normailzation is the set of steps that we do while we are working with database from the very start stage and continue as the database works. The aim of database normalization is to avoid set of problems related to the operation we runs on database. Database normalization goes thrugh three stages, they are related to each other and the previous stage is required to achieve the coming one.

### First Normal Form
The information is stored in a relational table with each column containing atomic values. There are no repeating groups of columns.
### Second Normal Form
The table is in first normal form and all the columns depend on the table’s primary key.
### Third Normal Form
The table is in second normal form and all of its columns are not transitively dependent on the primary key



