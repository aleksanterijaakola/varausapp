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

//
const Booking2 = mongoose.model("bookingData2", BookingSchema);
export default Booking2;