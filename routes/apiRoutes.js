const burger = require("../models/burger");

module.exports = app => {

  app.get("/api/burgers", function(req, res){
    burger.findAll()
      .then(dbBurgerData => res.jason(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/burgers", function(req, res){
    burger.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.jason(err);
      });
  });

  app.put("/api/burgers/:id", function(req, res){
    burger.update(req.body.devoure, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
  
}