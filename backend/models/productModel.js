import mongoose from 'mongoose'



const reviewSchema = mongoose.Schema({
    name: { type:String, required: true,},
    rating: { type:Number, required: true,},
    comment: { type:String, required: true,}

}, { timestamps:true})



const productSchema = mongoose.Schema({

    user:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },

    name:{
        type:String,
        required: true
    },

    image:{
        type:String,
        required: true,
    },

    brand:{
        type:String,
        required: true
    },

    category:{
        required: true,
        type:String

    },

    description:{
        required: true,
        type:String

    },

    reviews: [reviewSchema],

    rating:{
        required: true,
        type:Number,
        default: 0

    },
    numReviews:{
        required: true,
        type:Number,
        default: 0

    },
    price:{
        required: true,
        type:Number,
        default: 0

    }, 
    countInStock:{
        required: true,
        type:Number,
        default: 0

    },

},{
    timestamps:true
})

const Product = mongoose.model('Product', productSchema)

export default Product