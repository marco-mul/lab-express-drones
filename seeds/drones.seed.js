// Iteration #1

const mongoose = require('mongoose')

require("../db/index");

const Drone = require('../models/Drone.model')


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
  .then(drones => {
    console.log(`Created ${drones.length} drones`);
 
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while drones movies from the DB: ${err}`));