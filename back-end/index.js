import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import appRoutes from './routes/app-routes.js';

const app = express();

app.use(express.json())
app.use(cors());

app.use('/routes', appRoutes);


mongoose.connect("mongodb+srv://admin:pAZTf297Wg4rxVd@cluster0.m3tzc.mongodb.net/booking_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.listen(8080, () => {
    console.log("Server running on port 8080");
});
