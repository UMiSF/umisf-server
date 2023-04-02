const mongoose = require('mongoose');

const paymentMethodSchema = mongoose.Schema({
    methodType: {
        type: String,
        required: true
    }
});

exports.paymentMethod = mongoose.model('PaymentMethod',paymentMethodSchema)