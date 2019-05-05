const burger = require("../models/burger");

module.exports = (app) => {
  app.get("/", function(req, res){

    burger.findAll()
      .then(dbBurgerData => {
        res.render("index", {burgerData: dbBurgerDat})
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}