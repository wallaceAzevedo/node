'use strict'

var USERS =[
    {'id': 1, 'username': 'wallaceazevedo', 'password': '123456'},
    {'id': 2, 'username': 'paul', 'password': '123456'},
];

function getUsers(){
    return USERS;
}

exports.get = async(req, res, next) => {
    console.log('Entrou no nosso controller');
    res.send(getUsers());
};