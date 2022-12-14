import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true},
    email:{ 
         type: String,
         required: true, 
         index: true, 
         unique: true},
    password:{
        type: String, 
        required: true}
    })
const Admin = mongoose.model('Admin', userSchema);
export default Admin;