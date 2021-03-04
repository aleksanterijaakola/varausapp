const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    computerName: {
        type: String,
        required: true,
    },
})

const Booking = mongoose.model("bookingData", BookingSchema);
module.exports = Booking;