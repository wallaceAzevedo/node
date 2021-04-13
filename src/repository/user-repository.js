'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('user');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await User.find({status:true})
;}

exports.create = async(data) => {
    console.log('entrou 01');
    console.log(data);
    let user = new User(data);
    console.log('entrou 02');
    console.log(user);
    console.log('Entrou 03');
    let userCreated = await user.save();
    console.log('entrou 04');
    console.log(userCreated);
    return await userCreated;
}