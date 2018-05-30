var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(columns, newBurger, cb) {
        orm.insertOne("burgers", columns, newBurger, function(res){
            cb(res);
        });
    },
    update: function(identifier, condition, cb){
        orm.updateOne("burgers", identifier, condition, function(res){
            cb(res);
        })
    }
};


module.exports = burger;