const connection = require('./connection');

const findAll = () => {

  return new Promise((resolve, reject)=> {
    connection.query("SELECT * FROM burger", function(err, dbBurgerData){
      if (err){
        return reject(err);
      }

      return resolve(dbBurgerData);
    });
  });
};

const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burger SET ?",
    [burgerDataObj], function(err, dbBurgerData){
      if(err){
        return reject(err);
      }

      return resolve(dbBurgerData);
    });
  });
};

const update = (devouredValue, burgerId) => {
  return new Promise((resolve, reject) => {

    devouredValue = (devouredValue === "true")?
      true : false;
    
    connection.query("UPDATE burger SET devoured = ?", [burgerId], function(err, dbBurgerData){
      if (err){
        return reject(err);
      }
      else if (dbBurgerData.affectedRows === 0){
        return reject({message: "Check the id and try again"})
      }
      else{
        return resolve(dbBurgerData);
      }
    });
  });
};

module.exports = {
  findAll,
  create,
  update
}

