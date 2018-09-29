// Pull in required dependencies
var express = require("express");
var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza");

// Create the routes
router.get("/", function(req, res) {
  pizza.selectAll(function(data) {
    var hbsObject = {
      pizzas: data
    };

    res.render("index", hbsObject);
  });
});

router.post("/pizzas", function(req, res) {
  pizza.insertOne(["pizza_name"], [req.body.pizza_name], function(data) {
    res.redirect("/");
  });
});

router.put("/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  pizza.updateOne(
    {
      devoured: true
    },
    condition,
    function(data) {
      res.redirect("/");
    }
  );
});

// Export routes for server.js
module.exports = router;
