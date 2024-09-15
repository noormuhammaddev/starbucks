import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";  

const BlogSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    author: {
        type: String,
        required: true,  
    },
    createdAt: {
        type: Date,
        default: Date.now  
    }
});

const BlogModel = mongoose.model("Blogspot", BlogSchema);
export default BlogModel;
