import { products } from "./constants/Product.js";
import productModal from "./modal/ProductSchema.js";

const DefaultData = async () => {
    try {
        await productModal.deleteMany({});
        await productModal.insertMany(products);

        console.log('data successfully uploaded')
    } catch (error) {
        console.log('Error', error.message)
    }
}

export default DefaultData;