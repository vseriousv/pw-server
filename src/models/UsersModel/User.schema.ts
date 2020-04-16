import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  pass: String
});

export default mongoose.model('Users', userSchema);
