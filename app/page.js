"use client"
import User from "../lib/models/User";
import { connectToDB } from "../lib/mongodb/mongoose";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import mongoose from "mongoose";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
