import express from 'express';
import Booking from '../models/bookings.js';
import User from '../models/users.js';


const router = express.Router();


//Bookings
export const insertBooking = async (req, res) => {

    const userEmail = req.body.email;
    const computerName = req.body.computerName;

    const user = new Booking({ userEmail: userEmail, computerName: computerName });
    try {
        await user.save();
        res.send("inserted new booking")
    } catch(err) {
        console.log(err)
    } 
};


export const readBooking = async (req, res) => {

    Booking.find({}, (err, result) => {
        if (err) {
           res.send(err) 
        }

        res.send(result);
    })
};


export const deleteBooking = async (req, res) => {
    
    const id = req.params.id;
    await Booking.findByIdAndDelete(id).exec();
    (id);
    res.send("deleted")  
};


//Users
export const register = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = new User({ email: email, password: password });
    try {
        await user.save();
        res.send("inserted new user")
    } catch(err) {
        console.log(err)
    } 
};


export default router;