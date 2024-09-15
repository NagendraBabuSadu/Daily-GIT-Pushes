# A Todo Application
* Anyone can create a todo
* Anyone can see their existing todos
* Anyone can mark it as done

## Step 1: Create a backend folder for back-end application
* Initialize a node project
* `npm init` 
* Put a package.json file by writing `npm install express`, dependencies will be added in the package.json file automatically.
* `npm install zod` to authenticate the zod validation.
* create a separate file for zod validation and write the code in types.js file.
* Export the zod schema using module.exports library.
* Create a mongoDb instance to insert the data, get the data, and update the todo using db.js file.
* Write todoSchema for schema validation in db.js file.
* Write model for the created schema in db.js file. 
* `mongoose.model` is a link to create the collections in the mongo database.
* Create a .env file to insert the connectionString code of mongo db. 
* `npm install dotenv --save` to import the .env file libraries. 
* Write `require('dotenv')` in any file of your node.js application to import the dotenv module into your application.
* The `dotenv.config()` function is what actually triggers the loading of environment variables defined in your .env file into process.env.
* Import todo into the index.js file from db.js file
* Write creating a todo code in the index.js file by passing the body elements. 

### Router - app.post("/todo")
* Write an async router function
* Write code for body of `title, description`. 
* Write code for `zod - safeParse`
* If `zod - safeParse` is success, then Create a todo data in the mongoDb todos collection, else return the error message.

### Router - app.get("/todos")
* Find all the todos and return in the JSON format.

### Router - app.put("/completed")
* Write an async router function
* Write code for body of `title, description`. 
* Write code for `zod - safeParse`
* If `zod - safeParse` is success, then Update a todo data in the mongoDb todos collection with the help of `_id: req.body._id`, mark `completed: true`, else return the error message.

## Step 2: Create a frontend folder for front-end application
* Run `npm create vite@latest`in the terminal.
* Give the Project details.  
