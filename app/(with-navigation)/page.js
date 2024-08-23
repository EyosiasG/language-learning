'use client'
import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { AiOutlineRead } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { connectToDB } from "../../lib/mongodb/mongoose";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3
    }
  },
  animate: {
    opacity: 1,
  }
}

export default function Home() {
  const {user} = useUser();
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    if (user && user.id) {
      try {
        const response = await fetch(`/api/user/${userId}`);
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error fetching user data:', errorData.message);
          return;
        }
        const data = await response.json();
        console.log("user: ", data);
      } catch (error) {
        console.error('Unexpected error:', error);
      }
    }
  };

  useEffect(() => {
    console.log("userID:", userId)
    getUserData();
  },[user])

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true
      }}
    >
      <HeroSection />
      <StatsSection />
      <ExploreSection />
      <FeaturesSection />
      <Testimonials />
      <JoinUs />
      <UserButton />

    </motion.div>
  );
}

const HeroSection = () => {
  return (
    <>
      <section className="bg-white flex items-center lg:min-h-screen p-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Empowering Minds, Igniting Linguistics!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xg dark:text-gray-400">
              Join Learn Master today – where education becomes an adventure, and every click opens a door to endless possibilities. Let's redefine learning together, one lesson at a time.
            </p>
            <div className="flex">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-green-300 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Amharic
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-yellow-300 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Tigrigna
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-red-300 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Oromiffa
              </a>
            </div>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://img.freepik.com/free-vector/people-with-boxes-flat-composition-with-black-woman-sitting-front-open-box-with-clock-vector-illustration_1284-83834.jpg?t=st=1720449223~exp=1720452823~hmac=ba308b3603797f125ba8a24f06b0eb238665d2554e7ba07cf5d80908fedef4f8&w=996" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  )
}

const StatsSection = () => {


  const items = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      tranistion: {
        duration: 1.5
      }
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true
      }}
      class="flex items-center justify-center text-gray-800 p-20 bg-slate-100">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">

        <motion.div variants={items} class="flex items-center p-4 bg-white rounded">
          <div class="flex flex-shrink-0 items-center justify-center bg-blue-200 h-16 w-16 rounded">
            <AiOutlineRead size={20} />
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span class="text-xl font-bold">200+</span>
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Lessons</span>
            </div>
          </div>
        </motion.div>


        <motion.div variants={items} class="flex items-center p-4 bg-white rounded">
          <div class="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
            <BsQuestionSquare size={20} />
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span class="text-xl font-bold">500+</span>
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Practice Questions</span>
            </div>
          </div>
        </motion.div>


        <motion.div variants={items} class="flex items-center p-4 bg-white rounded">
          <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
            <LuPencilLine size={20} />
          </div>
          <div class="flex-grow flex flex-col ml-4">
            <span class="text-xl font-bold">140+</span>
            <div class="flex items-center justify-between">
              <span class="text-gray-500">Prep Tests</span>
            </div>
          </div>
        </motion.div>

      </div>

    </motion.div>
  )
}

const ExploreSection = () => {
  const items = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      tranistion: {
        duration: 2
      }
    }
  }
  return (
    <section className="min-h-screen p-4 bg-slate-100 ">
      <div className="max-w-screen-xl flex flex-col justify-center items-center mx-auto px-10 h-full">
        <h1 className="max-w-2xl mb-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Learn the way you want</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 w-full max-w-4xl mx-auto">
          <motion.div
            variants={items}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true
            }}
            className="w-full flex flex-col p-4">
            <div className="flex-1 bg-white rounded-lg">
              <a href="#">
                <img className="rounded-t-sm" src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Live online language classes with expert teachers</h5>
                </a>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-black rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Unlock All Categories
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={items}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true
            }}
            className="w-full flex flex-col p-4">
            <div className="flex-1 bg-white rounded-sm">
              <a href="#">
                <img className="rounded-t-sm" src="https://plus.unsplash.com/premium_photo-1661767519648-e738eb14dde3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </a>
              <div className="p-6">
                <a href="#">
                  <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Live online language classes with expert teachers</h5>
                </a>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white bg-black rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Explore Classes
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  const items_1 = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      tranistion: {
        duration: 2.5
      }
    }
  }
  const items_2 = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      tranistion: {
        duration: 2.5
      }
    }
  }
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden p-4">
      <h1 className="max-w-2xl mb-10 mt-10 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">Why Choose Us?</h1>
      <motion.div
        variants={items_1}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true
        }}
        className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center gap-x-10 max-w-4xl">  {/* Changed to grid-cols-1 on small screens */}
        <div className="flex justify-center items-center lg:order-last order-first">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3896.jpg?ga=GA1.2.1019957582.1719823234&semt=ais_hybrid"
            alt="Product screenshot"
          />
        </div>
        <div className="flex flex-col items-start justify-center mx-auto p-6">  {/* Added text-center */}
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white"> A Personalized<br /> Learning <br /> Path</h1>
          <p className="max-w-2xl mb-6 mt-2 font-light text-md text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-400">
            Our platform is designed to adapt to the unique needs and learning styles of each individual user. We recognize that every learner is different, with varying levels of knowledge, skills, and goals. That's why we offer a fully personalized learning path that caters specifically to your educational journey.
          </p>
          <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-black rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={items_2}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true
        }}
        className="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center gap-x-6 max-w-4xl">  {/* Changed to grid-cols-1 on small screens */}
        <div className="flex flex-col items-start justify-center mx-auto p-6">  {/* Added text-center */}
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white"> Continous Skill Assessement
          </h1>
          <p className="max-w-2xl mb-6 mt-2 font-light text-md text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-400">
            Our platform is designed to adapt to the unique needs and learning styles of each individual user. We recognize that every learner is different, with varying levels of knowledge, skills, and goals. That's why we offer a fully personalized learning path that caters specifically to your educational journey.
          </p>
          <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-black rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started
          </a>
        </div>
        <div className="flex justify-center items-center lg:order-first order-first">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/premium-vector/man-sits-bookshelf-with-laptop-picture-man-with-flower-it_958800-13070.jpg?w=740"
            alt="Product screenshot"
          />
        </div>
      </motion.div>
      <motion.div
        variants={items_1}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true
        }}
        className="grid grid-cols-1 md:grid-cols-2 mx-auto items-center justify-center gap-x-6 max-w-4xl">
        <div className="flex justify-center items-center lg:order-last order-first">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/grades-concept-illustration_114360-5958.jpg?t=st=1724250721~exp=1724254321~hmac=7bf44093fc8a81d91393bf3a37ea7e958f5270df4469cd780f3035aa782b1798&w=740"
            alt="Product screenshot"
          />
        </div>
        <div className="flex flex-col items-start justify-center mx-auto p-6">
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white"> A Personalized Learning Path</h1>
          <p className="max-w-2xl mb-6 mt-2 font-light text-md text-gray-500 lg:mb-8 md:text-md lg:text-md dark:text-gray-400">
            Our platform is designed to adapt to the unique needs and learning styles of each individual user. We recognize that every learner is different, with varying levels of knowledge, skills, and goals. That's why we offer a fully personalized learning path that caters specifically to your educational journey.
          </p>
          <a href="#" className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-black rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started
          </a>
        </div>

      </motion.div>
    </section>
  )
}

const Testimonials = () => {
  return (
    <section class="flex flex-col items-center justify-center bg-yellow-50 dark:bg-gray-900 p-10">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
          </svg>
          <blockquote>
            <p class="text-2xl font-medium text-gray-900 dark:text-white">"Language Learning has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img class="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div class="pr-3 font-medium text-gray-900 dark:text-white">Abebe Kebede</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

const JoinUs = () => {
  return (
    <section className="p-20 flex flex-col items-center justify-center">
      <h1 className="max-w-2xl mb-4 text-xl font-extrabold text-center tracking-tight text-black leading-none md:text-2xl xl:text-4xl dark:text-white">Join thousands of LearnMaster learners breaking the language barrier every day</h1>
      <div className="flex items-center justify-center p-4 mt-5">
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-green-300 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Amharic
        </a>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-yellow-300 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Tigrigna
        </a>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base text-center text-white rounded-lg bg-red-300 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Oromiffa
        </a>
      </div>
    </section>
  )
}