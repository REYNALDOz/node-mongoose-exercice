
import { BookModel as Book } from "../models/bookModel";
import { Request, Response } from "express";
import { BookType } from "../types/Book";
//import mongoose from 'mongoose';

export const getBooks = async (req: Request, res: Response)=>{
        //¿Como poner el tipo de dato al book ? cuando pongo
    // book : IBook sale error (Test:mudule4)
    const books =await Book.find({});
    //console.log(books);
    res.status(200).json({ books });
}

//convertiedo el ID en tipo objectId
let mongoos = require('mongoose');
const parseId = (id:any)=>{
    return mongoos.Types.ObjectId(id);
}


export const getBookById = async (req: Request, res: Response)=>{
    const {id}=req.params;
    //console.log(id);
    //¿Como poner el tipo de dato al book ? cuando pongo
    // book : IBook sale error (Test:mudule4)
    const book = await Book.findById({_id: parseId(id)});
    res.status(200).json(book)
}

 export const addNewBook= async(req:Request, res:Response)=>{
    
    
    try {
        const newBookInfo = req.body
        const newBook = await Book.create(newBookInfo);
        //const newBook = new Book({title:req.body.title, overview:req.body.overview, category:req.body.category, price:req.body.price});
        //const book = await newBook.save();
        res.status(200).json({data: newBook})
        
    } catch (error:any) {
        res.status(400).json({error:error.message})
        console.log(error);
    } 
}

export const updateBook = async (req: Request, res: Response)=>{
    try {
        const bookId =req.params.id;
        const newBookInfo = req.body;
        //¿Como poner el tipo de dato al book ? cuando pongo
        // book : IBook sale error (Test:mudule4)
        const book = await Book.findOneAndUpdate({_id: parseId(bookId)}, newBookInfo,{new:true});
        res.status(200).json({ book })
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}


export const deleteBook = async (req: Request, res: Response)=>{
    try {
        const bookId =req.params.id;
        console.log(bookId)
        const book = await Book.deleteOne({_id: parseId(bookId)});
        res.status(200).json('book successfully deleted');
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}





