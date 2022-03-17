const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
    name:{
        type: String,
        required: true
    },
    icon:{
        type: String,
    },
    color:{               //hashed color
        type: String
    },
    image:{
        type: String
    }

},
{timestamps: true}
);




module.exports = mongoose.model('Category', categorySchema);