const router = require('express').Router();
const burger = require('../models/burger_model.js');


router.get('/all', (req, res) => {
    burger.getAll()
    .then(result => res.send(result))
    .catch(err => res.sendStatus(500));
});

router.post('/add', (req,res) => {
    const name = req.body.name; 
    burger.addBurger(name)
    .then(result => res.sendStatus(200))
    .catch(err => res.sendStatus(500))
}); 


router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    burger.updateBurger(id)
    .then(result => res.sendStatus(200))
    .catch(err => res.send(err));
});




module.exports =  router; 