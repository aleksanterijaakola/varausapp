import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import appRoutes from './routes/app-routes.js';

const app = express();

app.use(express.json())
app.use(cors());

app.use('/routes', appRoutes);


mongoose.connect("*******************************", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.listen(8080, () => {
    console.log("Server running on port 8080");
});
