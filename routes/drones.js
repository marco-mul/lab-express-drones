const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find()
    res.render('drones/list', { drones })
  } catch (err) {
    console.error(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  try {
    res.render('drones/create-form')
  } catch (err) {
    console.error(err)
  }
});

router.post('/drones/create', async (req, res, next) => {
  try {
    await Drone.create(req.body)
    res.redirect('/drones')
  } catch (error) {
    res.render('drones/create-form')
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
