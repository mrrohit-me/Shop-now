import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})


//mongoose,modal takes 2 perimeter,
// 1. one is colloection(i.e table name)
//2. schema which we have created(Table Fields)

const productModal = mongoose.model('Shopping_items', ProductSchema)

export default productModal;