const { category } = require('../models/category');
const express = require('express');
const router = express.Router();

// ✅ GET all categories
router.get('/', async (req, res) => {
    try {
        const categoryList = await category.find();
        if (!categoryList) {
            return res.status(500).json({ success: false });
        }
        res.send(categoryList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ GET category by ID
router.get('/:id', getCategory, (req, res) => {
    res.json(res.category);
});

// ✅ Middleware function to get category by ID
async function getCategory(req, res, next) {
    let categoryItem;

    try {
        categoryItem = await category.findById(req.params.id);
        if (categoryItem == null) {
            return res.json({ message: 'Category not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.category = categoryItem;
    next();
}

module.exports = router;
