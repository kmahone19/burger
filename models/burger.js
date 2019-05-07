// pull in connection.js
const connection = require('./connection');

// findAll function to pull all burgers currently in the burgers table
const findAll = () => {

  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burger", function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(dbBurgerData);
    });
  });
};

// create function adds a new burger to the not eaten list
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burger SET ?",
      [burgerDataObj],
      function (err, dbBurgerData) {
        if (err) {
          return reject(err);
        }
        return resolve(dbBurgerData);
      });
  });
};

// Update function changes the devoure boolean to the oposite depending on its current value
const update = (devouredValue, burgerId) => {
  return new Promise((resolve, reject) => {

    devouredValue = (devouredValue === "true") ?
      true : false;

    connection.query("UPDATE burger SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function (err, dbBurgerData) {
      if (err) {
        return reject(err);
      } else if (dbBurgerData.affectedRows === 0) {
        return reject({
          message: "Check the id and try again"
        })
      } else {
        return resolve(dbBurgerData);
      }
    });
  });
};

// exports all functions to be used else where
module.exports = {
  findAll,
  create,
  update
}