// require model functions
const burger = require("../models/burger");

// exports routes to be used in server.js
module.exports = app => {

  // route to pull all info 
  app.get("/api/burgers", function(req, res){
    burger.findAll()
      .then(dbBurgerData => res.jason(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // route to add new burgers
  app.post("/api/burgers", function(req, res){
    burger.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.jason(err);
      });
  });

  // route to update exsisting burgers
  app.put("/api/burgers/:id", function(req, res){
    burger.update(req.body.devoure, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
}