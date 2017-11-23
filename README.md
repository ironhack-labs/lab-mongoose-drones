![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Basic CRUD with Drones

## Learning Goals

After this learning unit, you should be able to:

- Create a basic web application using Express.
- Use Mongoose in an Express application.
- Perform CR (create and read) actions on your database with a single Mongoose model through your web application.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone your fork into your `~/code/labs` folder.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-".

## Deliverables

All the files that make your Express/Mongoose app work, including your `drones.js` routes file and your `drone.js` model file.

## Introduction

An [unmanned aerial vehicle (UAV)](https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle), commonly known as a **drone**, unmanned aircraft system (UAS), or by several other names, is an aircraft without a human pilot aboard. They can be controlled remotely by a person or autonomously by computers.

Though their origins lie in military applications, they are used in business, agriculture, science and for recreation.

Amazon is even trying to use them [to deliver packages](https://www.amazon.com/Amazon-Prime-Air/b?node=8037720011).

![Amazon Prime Air drone](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_926e75d45f2a997152f4401844b3b4d5.jpg)

Hopefully you won't have one of these after you:

![General Atomics MQ-9 Reaper, a military drone](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e7d709d82f92c8a20fab10dc14f10100.jpg)

Let's create an app for the drone enthusiast using Express and Mongoose! Maybe the drones will spare us when they take over everything.

The app will allow a user to keep track of their drone collection. They will be able to see a list of their drones, and add new ones to their collection.


### Starter Code

Note that our starter code for this exercise is quite comprehensive. We've already used the Express generator to create the initial project structure. We've also created the `models/` and `views/drones/` folders, as well as the `bin/seeds.js` and `routes/drones.js` files.

```
starter-code/
├── .gitignore
├── app.js
├── bin
│   ├── seeds.js
│   └── www
├── models
│   └── .keep
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── drones.js
│   ├── index.js
│   └── users.js
└── views
    ├── drones
    │   └── .keep
    ├── error.ejs
    ├── index.ejs
    └── layout.ejs
```

The `routes/drones.js` file contains the routes we will be using for exercise, but the callbacks are all empty. You will be writing the code that goes inside them.

Finally, we've done some initial wiring in the `app.js` file. We've required Mongoose and connected to the `drones-dev` database on `localhost`:

```javascript
// ...
const mongoose = require('mongoose');

// ...

mongoose.connect('mongodb://localhost/drones-dev');

// ...
```

And we've also done the wiring between the `app.js` and the drones routes:

```javascript
// ...

var index = require('./routes/index');
var users = require('./routes/users');
// DRONES routes!
const drones = require('./routes/drones');

// ...

app.use('/', index);
app.use('/users', users);
// Wire the drones routes with the app
app.use('/', drones);

// ...
```

Now that we know what we are starting with, let's get to coding!

![Let's go](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_2eaf366a0cf7aa9c4e2590e616469388.gif)

## Iteration #1: `Drone` model

Our first step is to **create the `Drone` model** and **seed some initial drones** in our database.

The `Drone` model should have:
- `name` - String (name of the drone model, like _General Atomics MQ-9 Reaper_)
- `propellers` - Number (amount of propellers, like _4_)
- `maxSpeed` - Number (meters per second for the drone's maximum speed, like _18_)

### Steps we will follow in this iteration:

1. Create the `drone.js` model file in the `models/` folder.
2. In the `drone.js` model file:
    - Create the drone schema with `name`, `propellers` and `maxSpeed`.
    - Create the `Drone` model with the schema.
    - Export the `Drone` model.
4. In the `bin/seeds.js` file:
    - Create an array of 3 objects, each with `name`, `propellers` and `maxSpeed` for our initial drones.
    - Call the `Drone` model's `create` method with the array as argument.
    - In the `create` method's callback, display feedback.
5. Run the seed file with `node` to seed your database.
6. Check the database with the `mongo` command to confirm that your data was saved.

### Hints

Before your start using the model in **Step 4**, you need to require Mongoose, require the `Drone` model and call Mongoose's `connect` method to connect to the database.

For the drones array in **Step 4**, it should look something like this:

```javascript
const droneData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
```

Also for **Step 4**, you should check for the error in the callback and throw it if it's there. If there's no error, it would be good to loop through the newly saved drones and display their IDs.

Before **Step 5**, remember to call Mongoose's `disconnect` method in the `create` callback. Otherwise your seeds script will just keep the connection open and never finish.

For **Step 5**, you can confirm that your drones are saved by running this Mongo query:

```javascript
> db.drones.find()
```


## Iteration #2: Listing our drones

Now that we've got some drones in the database, we can start working with them in our Express app. Let's **display a list of all the drones**.

Here's the route we will be using:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/drones` |    GET    | Show all drones |

### Steps we will follow in this iteration:

1. Locate the `/drones` GET route in `routes/drones.js`.
2. In the route callback:
    - Call the `Drone` model's `find` method to retrieve all the drones.
    - If there's an error, call the route's `next` function and return.
    - If there isn't an error, render the `drones/index` view.
    - Pass the variable with the array of drones into the view.
3. Create the `index.ejs` view file inside the `views/drones/` folder.
4. In the `views/drones/index.ejs` view file:
    - Add an `<h2>` tag for the page's heading.
    - Use a `forEach` loop to display tags with each drone's `name`, `propellers`, and `speed`.
5. In the `views/index.ejs` (homepage) view file:
    - Add a link that goes to the `/drones` route.

### Hints

For **Step 2**, this will be the first time you use the `Drone` model in a route. Remember to require the `models/drone.js` file to be able to use it.

For **Step 4**, you'll need a `forEach` loop like this one (assuming your array of drones is named `drones`):

```ejs
<ul>
  <% drones.forEach((aDrone) => { %>
    <!-- display info from aDrone -->
  <% }) %>
</ul>
```

## Iteration #3: Adding new drones

Now that we have a list of drones, now we can focus our attention on **saving new drones to our database**.

Here are the routes we will be using:

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
| `/drones/new` |    GET    | Show a form to create a drone |
|   `/drones`   |   POST    | Save a drone to the database  |

### Steps we will follow in this iteration:

1. Locate the `/drones/new` GET route in `routes/drones.js`:
2. In that route's callback:
    - Render the `drones/new` view.
3. Create the `new.ejs` view file inside the `views/drones/` folder.
4. In the `views/drones/new.ejs` view file:
    - Add an `<h2>` for the page's heading.
    - Add a `<form>` tag that makes a POST request to `/drones`.
    - Add `<input>` tags inside the `<form>` tag for a new drone's `name`, `propellers` and `maxSpeed`
    - Add a `<button>` tag inside the `<form>` tag so that it can be submitted.
5. In the `views/drones/index.ejs` view file:
    - Add a link that goes to the `/drones/new` route.
6. Locate the `/drones` POST route in `routes/drones.js`.
7. In that route's callback:
    - Create an object with keys for `name`, `propellers` and `maxSpeed`.
    - Values for those keys should come from the form submission (`req.body`).
    - Create an instance of the `Drone` model with the object you made in the previous step.
    - Call the `save` method to save the new drone to the database.
    - If there's an error, call the route's `next` function and return.
    - If there isn't an error, redirect to the list of drones page (GET `/drones`).

### Hints

For **Step 4**, your form will look something like this:

```ejs
<form method="post" action="/drones">
  <div>
    <label for="drone-name"> Model Name: </label>
    <input type="text" name="name" id="drone-name">
  </div>

  <div>
    <label for="propellers"> Propellers: </label>
    <input type="number" name="propellers" id="propellers">
  </div>

  <div>
    <label for="max-speed"> Maximum Speed (meters per second): </label>
    <input type="number" name="maxSpeed" id="max-speed">
  </div>

  <button> Add this drone </button>
</form>
```

## Bonus: Styling

Our app should be pretty ugly right now if you (correctly) focused on the back-end during this exercise. To be a fully functioning web app, we need to add some styles.

In your layout require bootstrap, and add some very basic styles to make our drones app look ready for production.

/Happy coding!
