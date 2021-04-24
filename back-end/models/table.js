import mongoose from 'mongoose';


const tableSchema = new mongoose.Schema({
  name: String,
  isAvailable: Boolean,
});

export default tableSchema;