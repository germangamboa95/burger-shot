const orm = require('../configs/orm.js');

const burger = {
    getAll: function(){
        return new Promise((resolve, reject) => {
            orm.selectAll('burgers')
            .then(res => resolve(res))
            .catch(err => reject(err));
        });
    },
    addBurger: function(name) { 
        return new Promise((resolve, reject) => {
            orm.insertOne('burgers', name, false)
            .then(res => resolve(res))
            .catch(err => reject(err));
        });
    }, 
    updateBurger: function(id){
        return new Promise((resolve, reject) => {
            orm.updateOne('burgers', id, 'devoured', true)
            .then(res => resolve(res))
            .catch(err => reject(err));

        });
   
    

    }
}

module.exports = burger; 