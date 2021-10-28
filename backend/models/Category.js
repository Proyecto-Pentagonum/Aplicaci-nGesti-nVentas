const mongoose = require('nomgoose');

const categorySchema = new mongoose.Schema(
    {
        ID_Producto:{
            type: Number,
            require: true,
            unique:true

        }
    }
);

module.exports = mongoose.model('Category', categorySchema);