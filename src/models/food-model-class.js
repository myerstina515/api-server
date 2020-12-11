'use strict';

const mongoose = require('mongoose');
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(process.env.MONGOOSE_URI, options);

const foodSchema = mongoose.Schema({
  name: {type: String, required: true},
  calories: {type: Number, required: true},
  type: {type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTEIN', 'HEALTHY FAT', 'CARB']},
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;