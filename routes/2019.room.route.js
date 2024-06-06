// room -category --> M:M

//Question 02
/*Implementation of get categories, get rooms, add rooms and get rooms belongs to a 
category service endpoints.*/

const express = require('express');
const router = express.Router();
const Rooms = require('../model/2019.room.model')
const Category = require('../model/2019.category.model')

/*
a) Get rooms
*/

router.get('/',async(req,res)=>{
    try{
        const rooms = await Rooms.find().populate('category');
        if(!rooms){
            res.status(404).send('Rooms not found!');
        }
        res.status(200).send(rooms);
    }catch(err){
        res.status(500).send();
    }
})

/*
a) Add rooms
*/

router.post('/',async(req,res)=>{
    try{

        const room = new Rooms(req.body);
        if(!room){
            res.status(400).send('Please enter valid details!');
        }
        const saveRoom = await room.save();
        res.status(201).send(saveRoom);
    }catch(err){
        res.status(500).send();
    }
})

/*
c) Get rooms belogns to a category
*/

router.get('/:id/category',async(req,res)=>{
    try{

        const categoryId = req.params.id;
        const roomsForCategory = await Category.findById(categoryId).populate('rooms');
        if(!roomsForCategory){
            res.status(404).send('There are no rooms for this categoryId!');
        }
        res.status(200).send(roomsForCategory.rooms);

    }catch{
        res.status(500).send();
    }
})

/*
d)Implementation of Room total amount calculation service. 
*/

router.post('/totalAmount',async(req,res)=>{
    try{
        const {roomIds} = req.body;
        let totalAmount = 0;
        for(const roomId of roomIds){
            const room = await Rooms.findById(roomId);
            if(room){
                totalAmount += room.amount;
            }
            res.json(totalAmount);
        }
    }catch(err){
        res.json({message:err.message});
    }
})

module.exports = router;