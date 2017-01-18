![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Basic CRUD with Drones

## Learning Goals
- Create a basic web application using Express.
- Use Mongoose in an Express application.
- Perform CRUD actions on your database of a single Mongoose model through your web application.


## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone your fork into your `~/code/labs` folder.


## Submission

Upon completion, run the following commands
```
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

![Amazon Prime Air drone](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_bda276188d5ae221165fb64133f11309.jpg)

Hopefully you won't have one of these after you:

![General Atomics MQ-9 Reaper, a military drone.](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_76e24367e2d93f971d5a529f37350665.jpg)

Let's create an app for the drone enthusiast using Express and Mongoose! Maybe the drones will spare us when they take over everything.

The app will allow a user to keep track of their drone collection. They will be able to:

1. See the list of drones.
2. See the details of a drone.
3. Add new drones.
4. (Bonus) Delete drones.
5. (Bonus) Update existing drones.


## Iteration #1: `Drone` model

Our first step is to **create the `Drone` model** and **seed some initial drones** in our database.

The `Drone` model should have:
- `droneName` - String (name of the drone model, like _General Atomics MQ-9 Reaper_)
- `propellers` - Number (amount of propellers, like _4_)
- `maxSpeed` - Number (meters per second for the drone's maximum speed, like _18_)

### Steps we will follow in this iteration:

1. Create the `drone.js` model file in the `models/` folder.
2. In the `drone.js` model file:
    - Create the drone schema with `droneName`, `propellers` and `maxSpeed`.
    - Create the `Drone` model with the schema.
    - Export the `Drone` model.
3. Create the `seeds.js` file in the `bin/` folder.
4. In `seeds.js` file:
    - Create an array of 3 objects, each with `droneName`, `propellers` and `maxSpeed` for our initial drones.
    - Call the `Drone` model's `create` method with the array as argument.
    - In the `create` method's callback, display feedback.
5. Run the seed file with `node` to seed your database.
6. Check the database with the `mongo` command to confirm that your data was saved.

For **Step 4**, your drones array should look something like this:

```javascript
const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
```

Also for **Step 4**, you should check for the error in the callback and throw it if it's there. If there's no error, it would be good to loop through the newly saved drones and display their IDs.

For **Step 6**, you can confirm that your drones are saved by running this Mongo query:

```mongo
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
3. Create the `drones/` folder inside `views/`.
4. Create the `index.ejs` view file inside the `views/drones/` folder.
5. In the `views/drones/index.ejs` view file:
    - Add an `<h2>` tag for the page's heading.
    - Use a `forEach` loop to display tags with each drone's `droneName`.
6. In the `views/index.ejs` (homepage) view file:
    - Add a link that goes to the `/drones` route.


## Iteration #3: Displaying a drone's details

We've got the list of drones that display their `droneName`, but what if we want to see the other details? Let's link our list to a new page that **shows  a drone's details**.

Here's the route we will be using:

|     Route     | HTTP Verb |      Description      |
|---------------|-----------|-----------------------|
| `/drones/:id` |    GET    | Show a specific drone |

### Steps we will follow in this iteration:

1. Locate the `/drones/:id` GET route in `routes/drones.js`.
2. In the route callback:
    - Call the `Drone` model's `findOne` or `findById` method to retrieve the details of a specific drone by its id.
    - If there's an error, call the route's `next` function and return.
    - If there isn't an error, render the `drones/show` view.
    - Pass the variable with the drone's details into the view.
3. Create the `show.ejs` view file inside the `views/drones/` folder.
4. In the `views/drones/show.ejs` view file:
    - Add an `<h2>` for the page's heading.
    - Display tags with the drone's `droneName`, `propellers` and `maxSpeed`.
6. In the `views/drones/index.ejs` view file:
    - As part of the loop, add a link that goes to the `/drones/:id` route with the `:id` replaced by the actual drone's id.


## Iteration #4: Adding new drones

Now that we can see a drone's details, now we can focus our attention on **saving new drones to our database**.

Here are the routes we will be using:

|     Route     | HTTP Verb |          Description          |
|---------------|-----------|-------------------------------|
| `/drones/new` |    GET    | Show a form to create a drone |
|   `/drones`   |   POST    | Show a specific drone         |

### Steps we will follow in this iteration:

1. Locate the `/drones/new` GET route in `routes/drones.js`:
2. In that route's callback:
    - Render the `drones/new` view.
3. Create the `new.ejs` view file inside the `views/drones/` folder.
4. In the `views/drones/new.ejs` view file:
    - Add an `<h2>` for the page's heading.
    - Add a `<form>` tag that makes a POST request to `/drones`.
    - Add `<input>` tags inside the `<form>` tag for a new drone's `droneName`, `propellers` and `maxSpeed`
    - Add a `<button>` tag inside the `<form>` tag so that it can be submitted.
5. In the `views/drones/index.ejs` view file:
    - Add a link that goes to the `/drones/new` route.
6. Locate the `/drones` POST route in `routes/drones.js`.
7. In that route's callback:
    - Create an object with keys for `droneName`, `propellers` and `maxSpeed`.
    - Values for those keys should come from the form submission (`req.body`).
    - Create an instance of the `Drone` model with the object you made in the previous step.
    - Call the `save` method to save the new drone to the database.
    - If there's an error, render the `drones/new` view again.
    - If there isn't an error, redirect to the list of drones page (GET `/drones`).


## Iteration #5 (Bonus): Deleting drones

Only two more features left: updating existing drones and deleting drones. Since it's easier, let's first work on **deleting drones**.

Here's the route we will be using:

|        Route         | HTTP Verb |       Description       |
|----------------------|-----------|-------------------------|
| `/drones/:id/delete` |   POST    | Delete a specific drone |

### Steps we will follow in this iteration:

1. In the `views/drones/index.ejs` file:
    - As part of the loop, add a `<form>` tag that makes a POST request to `/drones/:id/delete` with the `:id` replaced by the actual drone's id.
    - Add a `<button>` tag inside the `<form>` tag so that it can be submitted.
2. Locate the `/drones/:id/delete` POST route in `routes/drones.js`.
3. In that route's callback:
    - Use the `Drone` model's `findByIdAndRemove` method to delete the drone specified by its id.
    - If there's an error, call the route's `next` function and return.
    - If there isn't an error, redirect to the list of drones page (GET `/drones`).


## Iteration #6 (Bonus): Editing drones

Final piece of our CRUD puzzle: **editing existing drones**.

Here are the routes we will be using:

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/drones/:id/edit` |    GET    | Show a form to create a drone |
|   `/drones/:id`    |   POST    | Show a specific drone         |

### Steps we will follow in this iteration:

1. Locate the `/drones/:id/edit` GET route in `routes/drones.js`.
2. In that route's callback:
    - Call the `Drone` model’s `findOne` or `findById` method to retrieve the details of a specific drone by its id.
    - If there's an error, call the route's `next` function and return.
    - If there isn't an error, render the `drones/edit` view.
    - Pass the variable with the drone’s details into the view.
3. Create the `edit.ejs` view file inside the `views/drones/` folder.
4. In the `views/drones/edit.ejs` view file:
    - Add an `<h2>` tag for the page's heading.
    - Add a `<form>` tag that makes a POST request to `/drones/:id` with the `:id` replaced by the actual drone's id.
    - Add `<input>` tags inside the `<form>` tag for `droneName`, `propellers` and `maxSpeed`.
    - Unlike with the creation form, give the `<input>` tags `value` attributes to pre-fill the inputs.
    - Add a `<button>` tag inside the `<form>` tag so that it can be submitted.
5. In the `views/drones/index.ejs` view file:
    - As part of the loop, add a link that goes to the `/drones/:id/edit` route with the `:id` replaced by the actual drone's id.
6. Locate the `/drones/:id` POST route in `routes/drones.js`.
7. In that route's callback:
    - Create an object with keys for `droneName`, `propellers` and `maxSpeed`.
    - Values for those keys should come from the form submission (`req.body`).
    - Call the `Drone` model's `findByIdAndUpdate` method with drone's id and the object you made in the previous step.
    - If there's an error, render the `drones/edit` view again.
    - If there isn't an error, redirect to the drone's details page (GET `/drones/:id`).