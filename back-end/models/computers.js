import mongoose from 'mongoose';

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

const Booking = mongoose.model("ComputerData", BookingSchema);
export default Booking;