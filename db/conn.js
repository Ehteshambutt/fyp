const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose
        .connect('mongodb+srv://user-123:user-123@cluster0.ssobfcr.mongodb.net/?retryWrites=true&w=majority',  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => console.error('Not Connected'));
}

module.exports = connectDB;

