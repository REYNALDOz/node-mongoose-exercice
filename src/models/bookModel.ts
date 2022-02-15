import mongoose, { Schema } from 'mongoose';

const schema = mongoose.Schema;

interface IBook extends Document{
    title:string,
    overview:string,
    category:string,
    price:number,
    created_at:Date
}


const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true,
    },
    category: {
        type: String
    },
    price: Number,
    created_at:{
        type:Date,
        dafault:Date.now(),
    }
});

export const BookModel = mongoose.model<IBook>('book', BookSchema);