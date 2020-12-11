'use strict';

require('dotenv').config();
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const FoodCollection = require('../models/food-collection');
const foodItem = new FoodCollection();

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(process.env.MONGOOSE_URI, options);

const doDataStuff = async() => {
  let ramen = {
    name: 'Ramen',
    calories: 600,
    type: 'CARB',
  };
  let food = { _id : '5fd2dc05d07a107133f35171', name : 'rice'};

  let newFood = await foodItem.create(ramen);
  console.log('New Food', newFood);
  // console.log(rice._id);
  let oneFood = await foodItem.get(food._id);
  console.log('One Food', oneFood);

  let allFood = await foodItem.get();
  console.log('All Food', allFood);

  let updateFood = await foodItem.update(food._id, food);
  console.log('Updated Food', updateFood);

  let deleteFood = await foodItem.delete(foodItem._id);
  console.log('Delete Food', deleteFood);



  mongoose.disconnect();
};

doDataStuff();










