import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aashishdave:33858627@cluster0.gkxn24n.mongodb.net/food-del').then(() => console.log("DB Connected"))
}