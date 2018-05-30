var express = require("express");
var burger = require("../models/burger.js");

//creates express router
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var bObject = {
            burgers: data
        };
        console.log ("from router.get in burger_controller: " + bObject);
        res.render("index", bObject);
    })
})

router.post("/api/burgers", function(req, res){
    console.log("got the request in controller")
    burger.insert(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured],
        function(result){
            res.json({id: result.insertID})
        }
    );
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("put condition: " + condition);
    burger.update( {
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
  }
);

module.exports = router;