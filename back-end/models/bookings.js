import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    userEmail: {
        type: String, 
    },
    bookingDate: {
        type: String,
    },
    seat: {
        type: String,
    },
})


const Booking = mongoose.model("bookingData", BookingSchema);
export default Booking;