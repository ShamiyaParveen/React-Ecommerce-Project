const {category} = require('../models/category');
const express = require('express');
const router = express.Router(); //Router instance banate hain

//GET all categories

router.get('/', async (req, res) => {
    try {
        const categoryList = await category.find();
       if (!categoryList) {
           res.status(500).json({success: false});
       }    
         res.send(categoryList);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

//GET category by ID
router.get('/:id', getCategory, (req, res) => {
    res.json(res.category);
});

module.exports = router;

//Middleware function to get category by ID