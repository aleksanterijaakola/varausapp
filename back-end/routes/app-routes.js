import express from 'express';
import { insertBooking, readBooking, deleteBooking, register, insertComputer, newData, readData, editBooking, userBooking } from '../controllers/app-controllers.js';

const router = express.Router();

//Bookings
router.post('/new_booking', insertBooking);
router.post('/new_computer', insertComputer);
router.get('/read_bookings', readBooking);
router.delete('/delete/:id', deleteBooking);
router.post('/new_data', newData);
router.get('/read_data', readData);
router.put('/update_data', editBooking);

//Users
router.post('/register', register);
router.post('/new_userbooking', userBooking);

export default router;