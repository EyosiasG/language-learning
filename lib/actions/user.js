import User from "../models/user";
import { connectToDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
  ) => {
    try {
      await connectToDB();
      console.log("Creating user");
  
      // Create a new user directly
      const user = new User({
        clerkId: id,
        firstName: first_name,
        lastName: last_name,
        profilePhoto: image_url,
        email: email_addresses[0].email_address,
        username: username,
      });
  
      await user.save();
      return user;
    } catch (error) {
      console.error("Error in createOrUpdateUser:", error);
      throw new Error("Failed to create user");
    }
  };

export const deleteUser = async (id) => {
    try{
        await connectToDB();
        await User.findOneAndDelete( {clerkId: id });
    }catch(error){
        console.error(error);
    }
}