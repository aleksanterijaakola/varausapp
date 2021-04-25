import mongoose from 'mongoose';

var daySchema = new mongoose.Schema({
  date: String,
  tables: Array
});

var Day = mongoose.model("Day", daySchema);

export default Day;