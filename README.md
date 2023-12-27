# Todo
A simple Todo list application made with Angular and Dot net.
To-Do List Application

1.	Requirement Details 
You have been asked to develop a simple application that allows users to create and manage their to-do list. 
The application should have the following features:
To-Do List: Users should be able to create and manage their to-do list. Users should be able to add new tasks, edit existing tasks, mark tasks as complete, and delete tasks. The tasks should be displayed in a table.
Data Storage: The application should store the to-do list data in a SQL database. You should use Web API and Entity Framework Core to interact with the database.
Validation: The application should validate user inputs to ensure that tasks have a name and a due date.
Error Handling: The application should handle errors gracefully and display meaningful error messages to the user.
Unit Tests: The application should have unit tests to ensure that critical functionality works as expected.
You should use Angular as the UI framework, .NET Core as the Web API, and SQL as the database. 
2.	Database
Database should be design using SQL server
3.	Web API 
Please develop web API using .net core and entity framework.

4.	UI
UI should be develop using latest Angular version
4.1.	Menu
Application Should contain 2 menus as follows
"Create Task": Clicking on this option should display the "Create Task" page and highlight the "Create Task" menu with a specific color.
"View Task": Clicking on this option should display the "View Task" page and highlight the "View Task" menu with a specific color.
4.2.	Create Task

 Functionality:
 The functionality of the page should allow users to create a new task by filling out the form and clicking the "Create Task" button
The status of the newly created task should be set to "New "
Validation: The application should validate user inputs to ensure that tasks have a name and a due date.
Please see below mockup for Create Task.

 
 
4.2.1.	View Task

Functionality:
View Task should display all the tasks.
It should Contain below columns

Please see below mockup for Create Task.

 
 
Column	Details	Remarks
Task Name	Task Name of the task	
Due Date	Due Date of the task	
Status	New or done	
Action	It should contain 2 buttons Mark as Complete and Delete 	Please refer below details for 



Functionality of Mark as Complete:  The "Mark as Complete" button should only be visible if the task status is "New"; otherwise, it should be hidden. When the user clicks on the "Mark as Complete" button, the task status should be updated from "New" to "Complete" in the database using web API

Deletion Button:  On clicking the Delete button, the task status should be deleted the from database using web API 

