import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
    },
    
    email: {
        type: String,
        require: true
    },
    profilePhoto: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;