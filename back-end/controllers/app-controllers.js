import express from 'express';
import Booking from '../models/bookings.js';
import User from '../models/users.js';
import Day from '../models/day.js';
import tableData from '../data/computers.js';


const router = express.Router();


//Bookings


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

export const newData = async (req, res) => {

    const dateTime = req.body.date;
    console.log(dateTime);
    
    Day.find({ date: dateTime }, (err, docs) => {
        if (!err) {
          if (docs.length > 0) {
            // Record already exists
            console.log("Record exists. Sent docs.");
            let finalArray = docs[0].tables.map(function (obj) {
              return obj.isReserved;
            });
            res.status(200).send(finalArray);
          } else {
            // Searched date does not exist and we need to create it
            const day = new Day({
              date: dateTime,
              tables: tableData
            });
            day.save(err => {
              if (err) {
                res.status(400).send("Error saving new date");
              } else {
                // Saved date and need to return all tables (because all are now available)
                console.log("Created new datetime. Here are the default docs");
                Day.find({ date: dateTime }, (err, docs) => {
                  err ? res.sendStatus(400) : res.status(200).send(docs[0]);
                });
              }
            });
          }
        } else {
          res.status(400).send("Could not search for date");
        }
      }); 
};

export const readData = async (req, res) => {

  Day.find({}, (err, result) => {
      if (err) {
         res.send(err) 
      }
      res.send(result);
  })
};

export const editBooking = async (req, res) => {

  const date = req.body.day;
  const row = req.body.row;
  const seat = req.body.seat;
  const query = { date: date };
  const updateDocument = {
    $set: { "tables.$[item].isReserved": true }
  };
  const options = {
    arrayFilters: [{
      "item.row": row,
      "item.seat": seat,
    }]
  };

  try {
    await Day.updateOne(query, updateDocument, options);
          res.send("update")
  } catch(err) {
      console.log(err)
  } 
}

export const removeBooking = async (req, res) => {

  const date = req.body.day;
  const seat = req.body.seat;

  console.log(date);
  console.log(seat);


  const query = { date: date };
  const updateDocument = {
    $set: { "tables.$[item].isReserved": false }
  };
  const options = {
    arrayFilters: [{
      "item.row": seat[0],
      "item.seat": parseInt(seat[1]),
    }]
  };

  try {
    await Day.updateOne(query, updateDocument, options);
          res.send("update")
  } catch(err) {
      console.log(err)
  } 
}

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

export const userBooking = async (req, res) => {

  const email = req.body.email;
  const date = req.body.date;
  const row = req.body.row;
  const seat = req.body.seat;

  const seatPlace = row + seat;

  const userbooking = new Booking({ userEmail: email, bookingDate: date, seat: seatPlace });
  try {
      await userbooking.save();
      res.send("inserted new userbooking")
  } catch(err) {
      console.log(err)
  } 
};



export default router;