import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    uniqueid :{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price :{
        type: Number,
        required: true
    },
    batch_no:{
        type: String,
        required: true
    }
})

const Item = mongoose.model('Item', itemSchema);
export default Item;