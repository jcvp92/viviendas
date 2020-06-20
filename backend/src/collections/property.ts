import { Schema } from 'mongoose';

export const propertySchema: Schema = new Schema({
    title: {
        type: String,
        required:[true,"is required title"]
    },
    type:{
        type: String,
        required:true
    },
    rooms: {
        type: Number,
        required:[true,"is required rooms"]
    },
    address: {
        type:String,
        required:[true, "is required address"] 
    },
    price:{
        type:Number,
    },
    area:{
        type:Number,    
    }
    
})
