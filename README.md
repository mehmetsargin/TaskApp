In the project directory, firstly use this command to access the db.json file in the api directory by the json server:

### `json-server --watch api/db.json --port 3004`

Then use this command to start the project

### `npm start`

### About the project

In this project, users can create tasks by inputting both a title and description. Newly created tasks will be displayed at the bottom of the page. Additionally, tasks can be edited or deleted from the bottom interface.

This project does not depend on any backend service. A fake database object was created using Json Server.

I employed the Context API for state management operations within the application.

For handling API requests, Axios was integrated.
