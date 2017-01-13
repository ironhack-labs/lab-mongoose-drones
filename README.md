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
4. Update existing drones.
5. Delete drones.


## Iteration #1: `Drone` model

Our first step is to create the `Drone` model and seed some initial drones in our database.

The `Drone` model should have:
- `modelName` - String (name of the model, like _General Atomics MQ-9 Reaper_)
- `propellers` - Number (amount of propellers, like _4_)
- `maxSpeed` - Number (meters per second for the drone's maximum speed, like _18_)

### Steps we will follow in this iteration:

1. Create the `drone.js` model file in the `models/` folder.
2. In the `drone.js` model file:
    - Create the drone schema with `modelName`, `propellers` and `maxSpeed`.
    - Create the `Drone` model with the schema.
    - Export the `Drone` model.
3. Create the `seeds.js` file in the `bin/` folder.
4. In `seeds.js` file:
    - Create an array of 3 objects, each with `modelName`, `propellers` and `maxSpeed` for our initial drones.
    - Call the `Drone` model's `create` method with the array as argument.
    - In the `create` method's callback, display feedback.
5. Run the seed file with `node` to seed your database.
6. Check the database with the `mongo` command to confirm that your data was saved.


TODO: detailed steps