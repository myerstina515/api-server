
'use strict';

// const express = require('express');

const model = require('./food-model-class');

class FoodCollection {
  constructor(){
    this.model = model;
  }

  get(_id){
    if(_id){
      console.log('this is the second id',_id);
      return this.model.find({_id});
    } else {
      return this.model.find({});
    }
  }

  create(record){
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  update(_id, record){
    return this.model.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id){
    return this.model.findByIdAndDelete(_id);
  }

}

module.exports = FoodCollection;