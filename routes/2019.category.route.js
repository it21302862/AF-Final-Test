// room -category --> M:M

//Question 02
/*Implementation of get categories, get rooms, add rooms and get rooms belongs to a 
category service endpoints.*/



const express = require('express');
const router = express.Router();
const Category = require('../model/2019.category.model')

/*
a) Get all categories
*/


router.get('/',async(req,res)=>{
    try{
        const categories = Category.find().populate('rooms');
        if(!categories){
            res.status(404).send('No categires found!');
        }
        res.status(200).send(categories);
    }catch(err){
        res.send(500).send();
    }
})

module.exports = router;