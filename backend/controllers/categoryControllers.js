
const Category = require('../models/category');

exports.create = (req, res) => {
    const category = new Category (req.body)
    category.save((err, data) => {
        res.json({data});
    })
}

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        res.json(data);
    })
}