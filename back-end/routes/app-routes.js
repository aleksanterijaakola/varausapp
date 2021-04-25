import express from 'express';
import { readBooking, deleteBooking, register, newData, readData, editBooking, userBooking, removeBooking } from '../controllers/app-controllers.js';

const router = express.Router();

//Bookings

router.get('/read_bookings', readBooking);
router.delete('/delete/:id', deleteBooking);
router.post('/new_data', newData);
router.get('/read_data', readData);
router.put('/update_data', editBooking);
router.put('/edit_data', removeBooking);

//Users

router.post('/register', register);
router.post('/new_userbooking', userBooking);

export default router;