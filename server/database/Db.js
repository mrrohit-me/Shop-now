import mongoose from 'mongoose'

const conn = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crudwithmern.nu1jr.mongodb.net/eCommerce?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log('mongodb')
    } catch (error) {
        console.log('error', error.message);
    }
}

export default conn;