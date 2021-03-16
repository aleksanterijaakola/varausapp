import express from 'express';
import { insertBooking, readBooking, deleteBooking, register } from '../controllers/app-controllers.js';

const router = express.Router();

//Bookings
router.post('/new_booking', insertBooking);
router.get('/read_bookings', readBooking);
router.delete('/delete/:id', deleteBooking);

//Users
router.post('/register', register);

export default router;