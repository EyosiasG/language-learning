"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/Logo.png'
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import "./navbar.scss"


export default function Navbar() {
    const path = usePathname();
    const { isLoaded, userId, sessionId, getToken } = useAuth()

    const links = [
        { href: "/", text: "Home" },
        { href: "/courses", text: "Courses" },
        { href: "/signIn", text: "Sign In" },
        { href: "/signUp", text: "Sign Up" },
    ]
    return (
        <header className="header">
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} height={30} alt="Learn Master Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LearnMaster</span>
                    </a>
                    <input id="nav-toggle" type="checkbox" class="hidden" />
                    <label
                        id="show-button"
                        for="nav-toggle"
                        class="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
                    >
                        <svg class="h-6 fill-current" viewBox="0 0 20 20">
                            <title>Menu Open</title>
                            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
                        </svg>
                    </label>
                    <label
                        id="hide-button"
                        for="nav-toggle"
                        class="order-2 hidden cursor-pointer items-center lg:order-1"
                    >
                        <svg class="h-6 fill-current" viewBox="0 0 20 20">
                            <title>Menu Close</title>
                            <polygon
                                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                                transform="rotate(45 10 10)"
                            ></polygon>
                        </svg>
                    </label>
                    <ul id="nav-menu"
                        class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5" >
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>

                        <li class="nav-item mt-3.5 lg:hidden">
                            <a class="btn btn-white btn-sm border-border" href="signin.html"
                            >Sing Up Now</a
                            >
                        </li>
                    </ul>
                    <div class="order-1 ml-auto hidden items-center space-x-3 md:order-2 md:ml-0 lg:flex">

                        <a href="signin.html">Log in</a>
                        <a class="border-2 border-black rounded-full px-2 py-1" href="signin.html">Sign up</a>
                    </div>

                </div>

            </nav >

        </header>
    )
}
