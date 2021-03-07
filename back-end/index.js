const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();


const UserModel = require("./models/users.js");
const BookingModel = require("./models/bookings");


app.use(express.json())
app.use(cors());


mongoose.connect("MongoDB-link", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});


app.post('/new_user', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = new UserModel({ email: email, password: password });
    try {
        await user.save();
        res.send("inserted new user")
    } catch(err) {
        console.log(err)
    } 
});


app.post('/new_booking', async (req, res) => {

    const userEmail = req.body.email;
    const computerName = req.body.computerName;

    const user = new BookingModel({ userEmail: userEmail, computerName: computerName });
    try {
        await user.save();
        res.send("inserted new booking")
    } catch(err) {
        console.log(err)
    } 
});


app.get('/read_bookings', async (req, res) => {

    BookingModel.find({}, (err, result) => {
        if (err) {
           res.send(err) 
        }

        res.send(result);
    })
});


app.delete("/delete/:id", async (req, res) => {
    
    const id = req.params.id;
    await BookingModel.findByIdAndDelete(id).exec();
    (id);
    res.send("deleted")  
});