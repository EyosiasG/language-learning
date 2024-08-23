import User from "../../../../lib/models/user";
import { connectToDB } from "../../../../lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
    try {
      await connectToDB();
      console.log('params:', params); // This should log the entire params object
      console.log('params.clerkId:', params.clerkId); // This should log the clerkId
      const user = await User.findOne({ clerkId: params.id });
      if(!user)
        return new Response(JSON.stringify(`No user found with ${params.clerkId}` ), { status: 200 });
  
      return new Response(JSON.stringify(user), { status: 200 });
    } catch (err) {
      console.error('Error retrieving user:', err);
      return new Response(JSON.stringify({ message: "Cannot retrieve user", error: err.message }), { status: 500 });
    }
  };