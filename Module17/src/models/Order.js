const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    items: [], 
    totalAmount: {type: Number, required:true}, 
    shippingAddress: {type: String, required: true},
    status: {type: String, required: true, default: "Pending"}
},
{
    timestamps: true, 
    versionKey: false
});

const Order = mongoose.model('orders', DataSchema);
module.exports = Order;
