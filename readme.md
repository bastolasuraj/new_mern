# About The Process of creating MERN Stack App
### Back-end using `Expressjs`

#### API using `Expressjs`
* First create a project folder and initiate the npm by writing `npm init` in your terminal.
* Install Expressjs by `npm i express`
* Install body-parser by `npm i body-parser`
* Install nodemon on the development server by `npm i nodemon -D`
----
#### Database using `MongoDB`

 * ####`MongoDB Commands`
 ----------------
 * #####`IMPORTANT NOTE`
 ----------------
 _______________________________________________
 * MySQL=============|==================MongoDB
 * tables============|==================collections
 * databases=========|==================databases
 * column============|==================field
 * data==============|==================value
 *
 ________________________________________________
 * use <dbname> creates and enters the database name specified
 * equivalent to create database <dbname>; use <dbname>
 *
 * db.<collection_name>.insertOne creates the collection of the given name and inserts the given data
 * equivalent to create table <table_name>(<id> <value>);
 *
 * show dbs displays all the databases
 * equivalent to show databases
 *
 * show collections displays the tables(collections) in the current database
 * equivalent to show tables
 *
 * db.<collection_name>.find() displays all the data in the collection
 * equivalent to select * from <table_name>
 *
 * db.<collection_name>.count() displays the count or the number of data in a collection
 * equivalent to count()
 *
 * db.<collection_name>.find({<field>:<value>})
 * equivalent to select * from <table_name> where <column>=<data>
 *
----
### Front-end using `Reactjs`

----