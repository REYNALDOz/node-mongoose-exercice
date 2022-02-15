import mongoose  from "mongoose";


export const dbConnection=(dbURL: string)=>{
    mongoose.connect(dbURL);
    
    mongoose.connection.on('error', ()=>console.log('Error on db connection'));
    mongoose.connection.once('open',()=>console.log('db connected'));

}